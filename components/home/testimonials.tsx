'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import portfolioData from "@/data/portfolio.json";

export function Testimonials() {
    const { testimonials } = portfolioData;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            handleNext();
        }, 10000); // 5 seconds interval
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, isHovered]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.items.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.items.length) % testimonials.items.length);
    };

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 50 : -50,
                opacity: 0,
                scale: 0.95
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 50 : -50,
                opacity: 0,
                scale: 0.95
            };
        }
    };

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pt-12 pb-24 z-10" id="testimonials">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-medium mb-4 backdrop-blur-sm">
                    <Icon icon="solar:chat-round-like-bold-duotone" className="w-4 h-4 text-emerald-400" />
                    <span>{testimonials.sectionLabel}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                    {testimonials.title}
                </h2>

                <div
                    className="relative w-full max-w-3xl mx-auto"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Quotation Marks Background */}
                    <Icon
                        icon="fa6-solid:quote-left"
                        className="absolute -top-6 -left-4 md:-top-10 md:-left-4 w-16 h-16 md:w-16 md:h-16 text-white/5 z-0 pointer-events-none"
                    />

                    <div className="relative h-64 md:h-48 overflow-visible flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 }
                                }}
                                className="absolute w-full px-8 md:px-16 flex flex-col items-center text-center z-10"
                            >
                                <p className="text-stone-300 text-base md:text-xl md:leading-relaxed font-light mb-8 italic">
                                    &quot;{testimonials.items[currentIndex].content}&quot;
                                </p>

                                <div className="flex flex-col items-center gap-1">
                                    <h4 className="text-emerald-400 font-semibold text-sm md:text-base">
                                        {testimonials.items[currentIndex].name}
                                    </h4>
                                    <span className="text-stone-500 text-xs md:text-sm">
                                        {testimonials.items[currentIndex].role}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-stone-400 hover:text-emerald-400 hover:bg-white/10 hover:border-emerald-500/30 transition-all z-20"
                        aria-label="Témoignage précédent"
                    >
                        <Icon icon="solar:alt-arrow-left-linear" className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-stone-400 hover:text-emerald-400 hover:bg-white/10 hover:border-emerald-500/30 transition-all z-20"
                        aria-label="Témoignage suivant"
                    >
                        <Icon icon="solar:alt-arrow-right-linear" className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Indicators */}
                    <div className="flex items-center justify-center gap-2 mt-8 md:mt-12 absolute -bottom-10 left-1/2 -translate-x-1/2 w-full">
                        {testimonials.items.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? "w-6 bg-emerald-400"
                                    : "w-1.5 bg-white/20 hover:bg-white/40"
                                    }`}
                                aria-label={`Aller au témoignage ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
