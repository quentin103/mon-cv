import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import portfolioData from "@/data/portfolio.json";

export function Hero() {
    const [activeTab, setActiveTab] = useState('ts');

    const tabs = [
        { id: 'ts', name: 'developer.ts', icon: 'vscode-icons:file-type-typescript-official' },
        { id: 'py', name: 'developer.py', icon: 'vscode-icons:file-type-python' },
        { id: 'php', name: 'Developer.php', icon: 'vscode-icons:file-type-php' },
    ];

    return (
        <section className="relative w-full md:pt-24  flex justify-center overflow-hidden bg-[#050505] text-white">
            {/* Abstract Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0A5C36]/30 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0A5C36]/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 z-10 py-12 md:py-24">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">

                    {/* Text Content (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium backdrop-blur-sm">
                            <Icon icon="solar:code-square-bold-duotone" className="w-4 h-4 text-emerald-400" />
                            <span>{portfolioData.hero.codeSnippet.statement}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                            {portfolioData.hero.title.part1} <br />
                            <span className="text-emerald-400">{portfolioData.hero.title.highlight}</span> {portfolioData.hero.title.part2}
                        </h1>

                        <p className="text-base md:text-lg text-white max-w-lg leading-relaxed font-light">
                            {portfolioData.hero.description}
                        </p>

                        {/* Social Links */}
                        <div className="pt-4 flex items-center gap-6">
                            {portfolioData.hero.socialLinks.map((social, idx) => (
                                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="relative group flex items-center justify-center">
                                    <Icon
                                        icon={social.icon}
                                        className="w-10 h-10 text-emerald-500/60 transition-all duration-300 cursor-pointer group-hover:scale-110 group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                                    />
                                    {/* Tooltip */}
                                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-[#0D1713]/90 backdrop-blur-md border border-white/10 text-slate-200 text-xs py-1.5 px-3 rounded-lg pointer-events-none whitespace-nowrap shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-20">
                                        {social.name}
                                        {/* Flèche du tooltip */}
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0D1713] border-b border-r border-white/10 rotate-45 transform"></span>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Code Editor Visual (Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
                        className="relative w-full max-w-xl mx-auto lg:ml-auto mt-10 lg:mt-0"
                    >
                        {/* Editor Window */}
                        <div className="relative rounded-2xl bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px)] border border-white/10 shadow-2xl overflow-hidden z-10 backdrop-blur-xl">
                            {/* Window Actions */}
                            <div className="flex items-center px-4 py-3 bg-[#0d1713]/80 border-b border-white/5 gap-4">
                                <div className="flex gap-2 shrink-0">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="flex gap-1 overflow-x-auto no-scrollbar">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${activeTab === tab.id ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}
                                        >
                                            <Icon icon={tab.icon} className="w-4 h-4" />
                                            <span className="hidden md:block">
                                                {tab.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Code Content */}
                            <div className="relative p-6 md:p-8 text-xs md:text-sm font-mono leading-relaxed overflow-hidden min-h-[450px]">
                                <AnimatePresence mode="wait">
                                    {activeTab === 'ts' && (
                                        <motion.div
                                            key="ts"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute inset-0 p-6 md:p-8 overflow-x-auto no-scrollbar"
                                        >
                                            <pre className="font-mono">
                                                <div className="text-slate-300"><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-purple-400">=</span> {'{'}</div>
                                                <div className="text-slate-300">  <span className="text-blue-300">name</span>: <span className="text-amber-300">"{portfolioData.hero.codeSnippet.developer.name}"</span>,</div>
                                                <div className="text-slate-300">  <span className="text-blue-300">role</span>: <span className="text-amber-300">"{portfolioData.hero.codeSnippet.developer.role}"</span>,</div>
                                                <div className="text-slate-300">  <span className="text-blue-300">skills</span>: [{portfolioData.hero.codeSnippet.developer.skills.map((s, i, arr) => <span key={i}><span className="text-amber-300">"{s}"</span>{i < arr.length - 1 ? ", " : ""}</span>)}],</div>
                                                <div className="text-slate-300">  <span className="text-blue-300">build</span>: <span className="text-purple-400">()</span> <span className="text-purple-400">=&gt;</span> {'{'}</div>
                                                <div className="text-slate-300">    <span className="text-purple-400">return</span> <span className="text-amber-300">"{portfolioData.hero.codeSnippet.developer.buildReturn}"</span>;</div>
                                                <div className="text-slate-300">  {'}'}</div>
                                                <div className="text-slate-300">{'};'}</div>
                                                <div className="text-slate-300 mt-4"><span className="text-blue-400">developer</span>.<span className="text-yellow-200">build</span>();</div>
                                            </pre>
                                        </motion.div>
                                    )}

                                    {activeTab === 'py' && (
                                        <motion.div
                                            key="py"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute inset-0 p-6 md:p-8 overflow-x-auto no-scrollbar"
                                        >
                                            <pre className="font-mono">
                                                <div className="text-slate-300"><span className="text-purple-400">class</span> <span className="text-emerald-300">Developer</span>:</div>
                                                <div className="text-slate-300">    <span className="text-blue-300">name</span> <span className="text-purple-400">=</span> <span className="text-amber-300">"{portfolioData.hero.codeSnippet.developer.name}"</span></div>
                                                <div className="text-slate-300">    <span className="text-blue-300">role</span> <span className="text-purple-400">=</span> <span className="text-amber-300">"{portfolioData.hero.codeSnippet.developer.role}"</span></div>
                                                <div className="text-slate-300">    <span className="text-blue-300">skills</span> <span className="text-purple-400">=</span> [{portfolioData.hero.codeSnippet.developer.skills.map((s, i, arr) => <span key={i}><span className="text-amber-300">"{s}"</span>{i < arr.length - 1 ? ", " : ""}</span>)}]</div>
                                                <div className="text-slate-300 mt-4">    <span className="text-purple-400">def</span> <span className="text-blue-300">build</span>(<span className="text-orange-300">self</span>):</div>
                                                <div className="text-slate-300">        <span className="text-purple-400">return</span> <span className="text-amber-300">"{portfolioData.hero.codeSnippet.developer.buildReturn}"</span></div>
                                                <div className="text-slate-300 mt-4"><span className="text-blue-400">developer</span> <span className="text-purple-400">=</span> <span className="text-emerald-300">Developer</span>()</div>
                                                <div className="text-slate-300"><span className="text-blue-400">developer</span>.<span className="text-yellow-200">build</span>()</div>
                                            </pre>
                                        </motion.div>
                                    )}

                                    {activeTab === 'php' && (
                                        <motion.div
                                            key="php"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute inset-0 p-6 md:p-8 overflow-x-auto no-scrollbar"
                                        >
                                            <pre className="font-mono">
                                                <div className="text-slate-300"><span className="text-purple-400">&lt;?php</span></div>
                                                <div className="text-slate-300 mt-4"><span className="text-purple-400">class</span> <span className="text-emerald-300">Developer</span> {'{'}</div>
                                                <div className="text-slate-300">    <span className="text-purple-400">public</span> <span className="text-emerald-300">string</span> <span className="text-blue-300">$name</span> <span className="text-purple-400">=</span> <span className="text-amber-300">"{portfolioData.hero.codeSnippet.developer.name}"</span>;</div>
                                                <div className="text-slate-300">    <span className="text-purple-400">public</span> <span className="text-emerald-300">string</span> <span className="text-blue-300">$role</span> <span className="text-purple-400">=</span> <span className="text-amber-300">"{portfolioData.hero.codeSnippet.developer.role}"</span>;</div>
                                                <div className="text-slate-300">    <span className="text-purple-400">public</span> <span className="text-emerald-300">array</span> <span className="text-blue-300">$skills</span> <span className="text-purple-400">=</span> [{portfolioData.hero.codeSnippet.developer.skills.map((s, i, arr) => <span key={i}><span className="text-amber-300">"{s}"</span>{i < arr.length - 1 ? ", " : ""}</span>)}];</div>
                                                <div className="text-slate-300 mt-4">    <span className="text-purple-400">public function</span> <span className="text-blue-300">build</span>(): <span className="text-emerald-300">string</span> {'{'}</div>
                                                <div className="text-slate-300">        <span className="text-purple-400">return</span> <span className="text-amber-300">"{portfolioData.hero.codeSnippet.developer.buildReturn}"</span>;</div>
                                                <div className="text-slate-300">    {'}'}</div>
                                                <div className="text-slate-300">{'}'}</div>
                                                <div className="text-slate-300 mt-4"><span className="text-blue-300">$developer</span> <span className="text-purple-400">= new</span> <span className="text-emerald-300">Developer</span>();</div>
                                                <div className="text-slate-300"><span className="text-blue-300">$developer</span><span className="text-purple-400">-&gt;</span><span className="text-yellow-200">build</span>();</div>
                                            </pre>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
