# Rekolt Web App

Rekolt est une plateforme agronomique complète (SaaS / Marketplace) conçue pour connecter intelligemment l'ensemble des acteurs du monde agricole : Producteurs, Acheteurs, Distributeurs, Vendeurs, Transporteurs et Conseillers.

## 🛠 Technologies Utilisées
*   **Framework** : Next.js (App Router)
*   **Styling** : Tailwind CSS
*   **Composants UI** : Shadcn UI, Framer Motion (Animations complexes)
*   **Icônes** : Iconify (Collection *Solar*)

## 🚀 Fonctionnalités Récemment Développées

### 1. Profils & Tableaux de Bord par Métier
Création de vues dédiées et hautement personnalisées pour chaque type d'utilisateur de la plateforme :
*   `Producteur`, `Acheteur`, `Distributeur`, `Vendeur`, `Transporteur`, `Conseiller`.
*   Chaque dashboard intègre des KPIs précis, des graphiques prévisionnels et des tableaux d'actions rapides pertinents au métier.

### 2. Rekolt Intelligence (Assistant IA Agronomique)
Refonte complète du module d'Intelligence Artificielle de Rekolt (`/ai`) :
*   **Espace Conseil (Accueil)** : Nouveau tableau de bord IA avec une barre de recherche universelle. 
*   **Météo Locale Avancée** : Widget météo intégré avec température, humidité, vent, pluie et **prévisions détaillées sur 3 jours**.
*   **Recommandations Personnalisées** : Flux de conseils poussés par l'IA (alertes météo, recommandations d'application d'engrais, irrigation).
*   **Chatbot & Vision** : Transition fluide vers la conversation avec l'Expert IA et module de diagnostic visuel de maladies des plantes.

### 3. Centre de Notifications Intégré
Mise en place d'un hub de notifications (`/profile/notifications`) :
*   Filtres dynamiques : Toutes, Non lues, Achats/Ventes, Système.
*   Conception UI condensée et premium pour gérer un grand volume d'informations.

### 4. Alertes Agricoles & Radar Communautaire
Nouveau système d'alertes pour anticiper les risques (`/profile/alertes`) :
*   Visualisation des alertes actives triées par niveau de sévérité (Élevé, Moyen, Faible).
*   **Radar Communautaire** : Carte collaborative des signalements agronomiques environnants.
*   Panneau de configuration granulaire pour les préférences d'alertes de l'utilisateur.

### 5. Gestion des Abonnements (SaaS)
Interface complète de facturation et de souscription (`/profile/abonnement`) :
*   Suivi du plan actuel (ex: *Pro Agriculteur*).
*   Tableau comparatif des offres avec mise en avant des fonctionnalités exclusives.
*   Historique détaillé des factures et des paiements récents.

### 6. Refinements UI / UX (Interface Premium)
*   Standardisation de la taille des composants système (icônes, textes secondaires, paddings).
*   Adoption d'un design "haute densité" offrant beaucoup d'informations tout en restant aéré, lisible et professionnel.
*   Intégration du composant `<Header />` global pour assurer une navigation cohérente même au sein des modules très immersifs (comme l'IA).

---

## 💻 Installation & Lancement

1.  **Cloner ou ouvrir le projet**
2.  **Installer les dépendances** :
    ```bash
    npm install
    # ou yarn install / pnpm install
    ```
3.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```
4.  Ouvrir [http://localhost:3000](http://localhost:3000) dans un navigateur.
