'use client'

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "@/lib/i18n/context";

export function TerminalInteractive() {
    const t = useTranslations();
    const locale = useLocale();
    const [history, setHistory] = useState<{ command: string; output: React.ReactNode | string }[]>([
        {
            command: "",
            output: t.terminal.welcome
        }
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Le changement de langue relance le terminal : l'historique passé, écrit dans
    // l'ancienne langue, n'aurait plus de sens mélangé aux nouvelles sorties.
    // On ignore le premier passage : un setState au montage interrompt l'animation
    // d'entrée de l'AnimatePresence qui enveloppe cet onglet.
    const renderedLocale = useRef(locale);
    useEffect(() => {
        if (renderedLocale.current === locale) return;
        renderedLocale.current = locale;
        setHistory([{ command: "", output: t.terminal.welcome }]);
    }, [locale, t]);

    // Auto-scroll to bottom but only within the terminal container
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, [history]);

    // Focus input on mount without scrolling the whole page down
    useEffect(() => {
        inputRef.current?.focus({ preventScroll: true });
    }, []);

    const handleContainerClick = () => {
        inputRef.current?.focus({ preventScroll: true });
    };

    const processCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let output: React.ReactNode | string = "";

        switch (true) {
            case trimmedCmd === "help":
                output = (
                    <div className="flex flex-col gap-1">
                        <div><span className="text-emerald-400">help</span>    - {t.terminal.help.help}</div>
                        <div><span className="text-emerald-400">ls</span>      - {t.terminal.help.ls}</div>
                        <div><span className="text-emerald-400">cat</span>     - {t.terminal.help.cat}</div>
                        <div><span className="text-emerald-400">about</span>   - {t.terminal.help.about}</div>
                        <div><span className="text-emerald-400">skills</span>  - {t.terminal.help.skills}</div>
                        <div><span className="text-emerald-400">contact</span> - {t.terminal.help.contact}</div>
                        <div><span className="text-emerald-400">whoami</span>  - {t.terminal.help.whoami}</div>
                        <div><span className="text-emerald-400">date</span>    - {t.terminal.help.date}</div>
                        <div><span className="text-emerald-400">clear</span>   - {t.terminal.help.clear}</div>
                        <div><span className="text-emerald-400">sudo</span>    - {t.terminal.help.sudo}</div>
                    </div>
                );
                break;
            case trimmedCmd === "ls":
                output = (
                    <div className="flex gap-4">
                        <span className="text-blue-400 font-bold">pages/</span>
                        <span className="text-blue-400 font-bold">projets/</span>
                        <span className="text-stone-300">about.txt</span>
                        <span className="text-stone-300">stack.json</span>
                        <span className="text-emerald-400">cv.pdf</span>
                    </div>
                );
                break;
            case trimmedCmd === "about" || trimmedCmd === "cat about.txt":
                output = t.terminal.about;
                break;
            case trimmedCmd === "skills" || trimmedCmd === "cat stack.json":
                output = t.terminal.skills;
                break;
            case trimmedCmd === "contact":
                output = (
                    <div>
                        Mail: <a href="mailto:koffi.kouamelan.yq@gmail.com" className="text-emerald-400 hover:underline">koffi.kouamelan.yq@gmail.com</a><br />
                        GitHub: <a href="https://github.com/quentin103" target="_blank" className="text-emerald-400 hover:underline">github.com/quentin103</a>
                    </div>
                );
                break;
            case trimmedCmd === "whoami":
                output = "guest";
                break;
            case trimmedCmd === "date":
                output = new Date().toString();
                break;
            case trimmedCmd.startsWith("echo "):
                output = trimmedCmd.substring(5);
                break;
            case trimmedCmd.startsWith("cat "):
                output = <span className="text-red-400">cat: {trimmedCmd.substring(4)}: No such file or directory</span>;
                break;
            case trimmedCmd === "clear":
                setHistory([]);
                return;
            case trimmedCmd === "sudo":
                output = t.terminal.sudo;
                break;
            case trimmedCmd === "":
                output = "";
                break;
            default:
                output = <span className="text-red-400">{t.terminal.notFound}: {trimmedCmd}. {t.terminal.notFoundHint}</span>;
        }

        setHistory(prev => [...prev, { command: cmd, output }]);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            processCommand(input);
            setInput("");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 p-4 md:p-6 overflow-y-auto font-mono text-xs md:text-sm custom-scrollbar"
            onClick={handleContainerClick}
        >
            <div className="flex flex-col gap-2 min-h-full">
                {history.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                        {item.command && (
                            <div className="flex gap-2">
                                <span className="text-emerald-500">quentin@portfolio:~$</span>
                                <span className="text-stone-300">{item.command}</span>
                            </div>
                        )}
                        {item.output && (
                            <div className="text-stone-400 whitespace-pre-wrap pl-2 mb-2 border-l border-white/5">
                                {item.output}
                            </div>
                        )}
                    </div>
                ))}

                <div className="flex gap-2 items-center">
                    <span className="text-emerald-500">quentin@portfolio:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-none outline-none text-stone-300 font-mono"
                        spellCheck={false}
                        autoComplete="off"
                        autoFocus
                    />
                </div>
                <div ref={bottomRef} className="h-4" />
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </motion.div>
    );
}
