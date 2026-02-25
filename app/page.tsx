'use client'
import { Hero } from "@/components/home/hero";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

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
  return (
    <main className="w-full min-h-screen text-white overflow-x-hidden relative">
      <Hero />
      {/* Expertise Section */}
      <section className="py-10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"></div>
        <div className="container max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider mb-4">
              <Icon icon="solar:cpu-bold-duotone" className="w-3.5 h-3.5" />
              Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Stack Technique</h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Frontend */}
            <motion.div variants={item} className="p-6 rounded-3xl bg-white/2 border border-white/5 hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon icon="solar:monitor-smartphone-bold-duotone" className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Frontend</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">Création d'interfaces web fluides, réactives et accessibles.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-300">React</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-300">Next.js</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-300">Tailwind</span>
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div variants={item} className="p-6 rounded-3xl bg-white/2 border border-white/5 hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon icon="solar:database-bold-duotone" className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Backend</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">Conception d'APIs robustes, bases de données SQL ou NoSQL.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-300">Node.js</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-300">Express</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-300">SQL</span>
              </div>
            </motion.div>

            {/* DevOps */}
            <motion.div variants={item} className="p-6 rounded-3xl bg-white/2 border border-white/5 hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon icon="solar:cloud-storage-bold-duotone" className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Déploiement</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">CI/CD, conteneurisation et hébergement cloud moderne.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-300">Docker</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-300">Vercel</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-300">Git</span>
              </div>
            </motion.div>

            {/* UI/UX */}
            <motion.div variants={item} className="p-6 rounded-3xl bg-white/2 border border-white/5 hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon icon="solar:pen-new-round-bold-duotone" className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Design UI/UX</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">Prototypage Figma et intégration au pixel près.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-300">Figma</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-300">Animation</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-slate-300">Wireframe</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}