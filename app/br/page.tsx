'use client'
import { Hero } from "@/components/home/hero";
import { ProductDetailModal } from "@/components/home/product-detail-modal";
import { PublicationCard } from "@/components/home/publication-card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
};

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 space-y-12 overflow-x-hidden">
      {/* Recent Publications Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Projets Récents</h2>
            <p className="text-slate-500 mt-2">Un aperçu de mon savoir-faire récent.</p>
          </div>
          <Button variant="ghost" className="text-[#0A5C36] font-bold rounded-full">
            Voir tout <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <PublicationCard
            title="E-Commerce React"
            description="Application complète avec panier, système d'authentification et paiement Stripe intégré."
            sellerName="Next.js"
            isVerified={true}
            price="40"
            unit="Jours"
            distance="GitHub"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400"
            isPromo={true}
            onClick={() => handleProductClick({
              title: "E-Commerce React",
              description: "Application complète avec panier, système d'authentification et paiement Stripe intégré.",
              sellerName: "Next.js",
              isVerified: true,
              price: "40",
              unit: "Jours",
              distance: "GitHub",
              image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400",
              isPromo: true
            })}
          />
          <PublicationCard
            title="Dashboard Admin"
            description="Interface d'administration complexe avec graphiques interactifs et gestion de données."
            sellerName="Vue.js"
            isVerified={true}
            price="25"
            unit="Jours"
            distance="Vercel"
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
            onClick={() => handleProductClick({
              title: "Dashboard Admin",
              description: "Interface d'administration complexe avec graphiques interactifs et gestion de données.",
              sellerName: "Vue.js",
              isVerified: true,
              price: "25",
              unit: "Jours",
              distance: "Vercel",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
            })}
          />
          <PublicationCard
            title="SaaS Métier Freelance"
            description="Outil de suivi de temps et facturation pour freelances, multi-tenancy."
            sellerName="Node.js"
            isVerified={false}
            price="60"
            unit="Jours"
            distance="Privé"
            image="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=400"
            isPromo={true}
            onClick={() => handleProductClick({
              title: "SaaS Métier Freelance",
              description: "Outil de suivi de temps et facturation pour freelances, multi-tenancy.",
              sellerName: "Node.js",
              isVerified: false,
              price: "60",
              unit: "Jours",
              distance: "Privé",
              image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=400",
              isPromo: true
            })}
          />
          <PublicationCard
            title="Application Mobile iOS"
            description="App mobile fitness avec tracking de données temps réel et intégration API."
            sellerName="React Native"
            isVerified={true}
            price="45"
            unit="Jours"
            distance="App Store"
            image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9a?auto=format&fit=crop&q=80&w=400"
            onClick={() => handleProductClick({
              title: "Application Mobile iOS",
              description: "App mobile fitness avec tracking de données temps réel et intégration API.",
              sellerName: "React Native",
              isVerified: true,
              price: "45",
              unit: "Jours",
              distance: "App Store",
              image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9a?auto=format&fit=crop&q=80&w=400"
            })}
          />
        </div>
      </section>

      {/* Best Of Services Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Mes Compétences Clés</h2>
            <p className="text-slate-500 mt-2">Découvrez ce que je peux apporter à vos projets.</p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Frontend */}
          <motion.div variants={item} whileHover={{ y: -8 }} className="bg-white p-6 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-[#0A5C36]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon icon="solar:monitor-smartphone-bold-duotone" className="h-8 w-8 text-[#0A5C36]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-900">Développement Frontend</h3>
            <p className="text-sm text-slate-500 mb-4">Création d'interfaces web fluides et dynamiques avec React.js et Next.js.</p>
            <a href="#" className="text-sm font-bold text-[#0A5C36] flex items-center gap-1 hover:gap-2 transition-all">
              Voir les repos <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Backend */}
          <motion.div variants={item} whileHover={{ y: -8 }} className="bg-white p-6 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-[#0A5C36]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon icon="solar:database-bold-duotone" className="h-8 w-8 text-[#0A5C36]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-900">Architecture Backend</h3>
            <p className="text-sm text-slate-500 mb-4">Conception d'APIs robustes et scalables utilisant Node.js et bases de données.</p>
            <a href="#" className="text-sm font-bold text-[#0A5C36] flex items-center gap-1 hover:gap-2 transition-all">
              En savoir plus <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* DevOps */}
          <motion.div variants={item} whileHover={{ y: -8 }} className="bg-white p-6 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-[#0A5C36]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon icon="solar:cloud-storage-bold-duotone" className="h-8 w-8 text-[#0A5C36]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-900">Déploiement & DevOps</h3>
            <p className="text-sm text-slate-500 mb-4">Mise en place de l'intégration continue, Docker et hébergement cloud.</p>
            <a href="#" className="text-sm font-bold text-[#0A5C36] flex items-center gap-1 hover:gap-2 transition-all">
              Stack technique <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* UX/UI */}
          <motion.div variants={item} whileHover={{ y: -8 }} className="bg-white p-6 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-[#0A5C36]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon icon="solar:pen-new-round-bold-duotone" className="h-8 w-8 text-[#0A5C36]" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-900">Design UI/UX</h3>
            <p className="text-sm text-slate-500 mb-4">Maquettage soigné sur Figma et implémentation pixel-perfect sur navigateur.</p>
            <a href="#" className="text-sm font-bold text-[#0A5C36] flex items-center gap-1 hover:gap-2 transition-all">
              Mes designs <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Maximisez vos Récoltes Section */}
      <section className="grid md:grid-cols-2 gap-6 py-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#0A5C36] rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
        >
          <div className="relative z-10 max-w-sm">
            <h3 className="text-3xl font-bold mb-4 leading-tight text-white">Développement Sur-Mesure</h3>
            <p className="text-emerald-50/90 mb-8 text-lg font-medium">Des applications web adaptées parfaitement à vos règles métiers et vos utilisateurs.</p>
            <a href="#" className="inline-flex items-center font-bold text-white hover:text-emerald-200 transition-colors border-b-2 border-white/30 pb-0.5 hover:border-white">
              Explorer les options <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          {/* Abstract visual */}
          <div className="absolute -bottom-6 -right-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-105 duration-500">
            <Icon icon="solar:code-file-bold-duotone" className="h-64 w-64 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-[#053d23] rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
        >
          <div className="relative z-10 max-w-sm">
            <h3 className="text-3xl font-bold mb-4 leading-tight text-white">Performances Optimisées</h3>
            <p className="text-emerald-50/80 mb-8 text-lg font-medium">Temps de réponse réduits, accessibilité et scores SEO parfaits pour vos plateformes.</p>
            <a href="#" className="inline-flex items-center font-bold text-white hover:text-emerald-200 transition-colors border-b-2 border-white/30 pb-0.5 hover:border-white">
              Voir mon approche <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          {/* Abstract chart visual */}
          <div className="absolute -bottom-6 -right-6 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-105 duration-500">
            <Icon icon="solar:rocket-bold-duotone" className="h-64 w-64 text-white" />
          </div>
        </motion.div>
      </section>

      {/* Avantages Section */}
      <section className="py-16">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sticky top-24"
          >
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900">
              Pourquoi choisir <span className="text-[#0A5C36] relative inline-block">
                mon profil
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#0A5C36]/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 20 100 15" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> ?
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Agilité, rigueur et professionnalisme pour garantir le succès technique et humain de vos projets.
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-x-8 gap-y-12"
          >
            {/* Item 1 */}
            <motion.div variants={item} className="space-y-4 group p-6 rounded-3xl hover:bg-[#0A5C36]/5 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-[#0A5C36]/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Icon icon="solar:layers-minimalistic-bold-duotone" className="h-8 w-8 text-[#0A5C36]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Architecture Clean</h3>
              <p className="text-slate-600 leading-relaxed">Application des design patterns et structuration intelligente du code pour une maintenance facilitée.</p>
              <Button variant="ghost" className="pl-0 text-[#0A5C36] font-bold hover:bg-transparent hover:text-[#0A5C36]/80 group-hover:pl-2 transition-all">
                Voir GitHub <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            {/* Item 2 */}
            <motion.div variants={item} className="space-y-4 group p-6 rounded-3xl hover:bg-[#0A5C36]/5 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-[#0A5C36]/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Icon icon="solar:magic-stick-3-bold-duotone" className="h-8 w-8 text-[#0A5C36]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Sensibilité UI</h3>
              <p className="text-slate-600 leading-relaxed">Création d'interfaces élégantes, cohérentes avec l'identité visuelle de votre produit numérique.</p>
              <Button variant="ghost" className="pl-0 text-[#0A5C36] font-bold hover:bg-transparent hover:text-[#0A5C36]/80 group-hover:pl-2 transition-all">
                Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            {/* Item 3 */}
            <motion.div variants={item} className="space-y-4 group p-6 rounded-3xl hover:bg-[#0A5C36]/5 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-[#0A5C36]/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Icon icon="solar:rocket-bold-duotone" className="h-8 w-8 text-[#0A5C36]" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Livraisons Rapides</h3>
              <p className="text-slate-600 leading-relaxed">Développement itératif avec des méthodologies agiles pour valider les besoins rapidement.</p>
              <Button variant="ghost" className="pl-0 text-[#0A5C36] font-bold hover:bg-transparent hover:text-[#0A5C36]/80 group-hover:pl-2 transition-all">
                Ma méthodologie <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            {/* Item 4 */}
            <motion.div variants={item} className="space-y-4 group p-6 rounded-3xl hover:bg-[#0A5C36]/5 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-[#0A5C36]/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Icon icon="solar:shield-check-bold-duotone" className="h-8 w-8 text-[#0A5C36]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Code Sécurisé</h3>
              <p className="text-slate-600 leading-relaxed">Typage strict (TypeScript), tests unitaires et intégration continue pour un risque de bugs maîtrisé.</p>
              <Button variant="ghost" className="pl-0 text-[#0A5C36] font-bold hover:bg-transparent hover:text-[#0A5C36]/80 group-hover:pl-2 transition-all">
                Voir l'expertise <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}