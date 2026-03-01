FROM node:20-alpine AS base

# 1. Étape pour les dépendances
FROM base AS deps
# Nécessaire pour l'exécution sur alpine avec certaines bibliothèques node
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copie des fichiers de configuration package manager (npm)
COPY package.json package-lock.json* ./
# Installation propre
RUN npm ci

# 2. Étape de Build de l'application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variables d'environnements nécessaires au build (si existantes)
ENV NEXT_TELEMETRY_DISABLED=1

# Récupération des variables publiques pour la compilation Next.js
ARG NEXT_PUBLIC_TURNSTILE_SITE_KEY
ENV NEXT_PUBLIC_TURNSTILE_SITE_KEY=$NEXT_PUBLIC_TURNSTILE_SITE_KEY

ARG TURNSTILE_SECRET_KEY
ENV TURNSTILE_SECRET_KEY=$TURNSTILE_SECRET_KEY

ARG RESEND_API_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY

RUN npm run build

# 3. Étape de Production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Variables serveur depuis Railway
ARG TURNSTILE_SECRET_KEY
ENV TURNSTILE_SECRET_KEY=$TURNSTILE_SECRET_KEY
ARG RESEND_API_KEY
ENV RESEND_API_KEY=$RESEND_API_KEY

# Sécurité: empêcher de runner en root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# On récupère le dossier public qui peut contenir des images/robots.txt
COPY --from=builder /app/public ./public

# Configuration du cache pour les versions standalone (très important de donner droits d'écriture à nextjs)
RUN mkdir .next
RUN chown nextjs:nodejs .next

# On copie uniquement ce qui est nécessaire grâce au mode Next.js 'standalone'
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000

# server.js est le point d'entrée généré par next.js standalone
CMD HOSTNAME="0.0.0.0" node server.js
