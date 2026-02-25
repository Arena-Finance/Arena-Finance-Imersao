import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingDown, Gavel } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Problem: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.problem-title',
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 70%',
                    }
                }
            );

            gsap.fromTo('.problem-text',
                { opacity: 0, x: 30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 65%',
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-black-abs relative border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Column */}
                    <div className="lg:col-span-4 problem-title">
                        <div className="w-12 h-[2px] bg-red-600 mb-6"></div>
                        <p className="font-mono text-red-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">Aperto na Garganta</p>
                        <h2 className="font-playfair text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white/95 tracking-wide">
                            O sistema esconde o caminho porque precisa do seu dinheiro para financiar o caos.
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-8 problem-text text-gray-300 font-montserrat flex flex-col justify-center">
                        <div className="space-y-6 md:space-y-8">
                            <p className="leading-relaxed text-[#a0aabf] text-xl md:text-2xl">
                                Deixar todo o seu capital no Brasil é aceitar viver no fio da navalha. Nós somos ensinados a investir apenas naquilo que conhecemos, mas o que não te contam é que o cenário interno é desenhado para devorar o seu patrimônio.
                            </p>
                            <p className="text-xl md:text-2xl text-white font-medium">Você está diariamente exposto a:</p>
                        </div>

                        {/* Divider line */}
                        <div className="w-full h-[1px] bg-white/5 my-10 md:my-14"></div>

                        {/* Problems List */}
                        <div className="space-y-8">
                            {/* Problem 1 */}
                            <div className="flex gap-6 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-950/30 border border-red-900/50 flex items-center justify-center group-hover:bg-red-900/40 transition-colors">
                                    <Gavel className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="font-playfair text-white text-2xl font-bold mb-2">Insegurança Jurídica Crônica</h3>
                                    <p className="text-lg text-[#a0aabf] leading-relaxed">
                                        Regras mudam da noite para o dia e a propriedade privada não é 100% respeitada.
                                    </p>
                                </div>
                            </div>

                            {/* Problem 2 */}
                            <div className="flex gap-6 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-950/30 border border-red-900/50 flex items-center justify-center group-hover:bg-red-900/40 transition-colors">
                                    <TrendingDown className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="font-playfair text-white text-2xl font-bold mb-2">Risco de Confisco Velado</h3>
                                    <p className="text-lg text-[#a0aabf] leading-relaxed">
                                        O governo não precisa bloquear sua poupança hoje; ele faz isso através da criação desenfreada de impostos.
                                    </p>
                                </div>
                            </div>

                            {/* Problem 3 */}
                            <div className="flex gap-6 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-950/30 border border-red-900/50 flex items-center justify-center group-hover:bg-red-900/40 transition-colors">
                                    <TrendingDown className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="font-playfair text-white text-2xl font-bold mb-2">Derretimento da Moeda</h3>
                                    <p className="text-lg text-[#a0aabf] leading-relaxed">
                                        O Real perde valor a cada crise política e a inflação corrói seu poder de compra de forma invisível.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
