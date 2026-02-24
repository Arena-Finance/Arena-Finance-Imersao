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
                        <div className="w-12 h-[2px] bg-gold mb-6"></div>
                        <p className="font-mono text-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">O Cenário Real</p>
                        <h2 className="font-playfair text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white/95 tracking-wide">
                            O sistema<br className="hidden lg:block" /> não quer que<br className="hidden lg:block" /> você saiba a<br className="hidden lg:block" /> verdade.
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-8 problem-text text-gray-300 font-montserrat flex flex-col justify-center">
                        <div className="space-y-6 md:space-y-8">
                            <p className="text-2xl md:text-3xl text-white font-playfair font-medium tracking-wide">
                                Você trabalhou décadas para construir seu império.
                            </p>
                            <p className="leading-relaxed text-[#a0aabf] text-xl md:text-2xl">
                                Mas, ao manter todo o seu capital sob uma única jurisdição, você expõe o trabalho de uma vida a riscos políticos, inflacionários e jurídicos completamente desnecessários.
                            </p>
                            <p className="leading-relaxed text-[#a0aabf] text-xl md:text-2xl">
                                A elite global não joga com as mesmas regras. Enquanto você paga impostos excessivos e sofre com a desvalorização cambial, os verdadeiros detentores de riqueza operam em um nível acima das fronteiras geográficas.
                            </p>
                        </div>

                        {/* Divider line */}
                        <div className="w-full h-[1px] bg-white/5 my-10 md:my-14"></div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="bg-[#03050a] border border-white/5 p-8 relative overflow-hidden group hover:border-gold/20 transition-colors duration-500">
                                <TrendingDown className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-32 text-white/5 transition-transform duration-700 group-hover:scale-110 group-hover:text-gold/5" strokeWidth={1} />
                                <h3 className="font-playfair text-gold text-2xl sm:text-3xl font-bold mb-4 relative z-10">Risco Cambial</h3>
                                <p className="text-lg sm:text-xl leading-relaxed text-[#a0aabf] relative z-10 w-11/12">
                                    O Real perdeu 85% do seu poder de compra em dólar nas últimas duas décadas.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#03050a] border border-white/5 p-8 relative overflow-hidden group hover:border-gold/20 transition-colors duration-500">
                                <Gavel className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-32 text-white/5 transition-transform duration-700 group-hover:scale-110 group-hover:text-gold/5" strokeWidth={1} />
                                <h3 className="font-playfair text-gold text-2xl sm:text-3xl font-bold mb-4 relative z-10">Insegurança Jurídica</h3>
                                <p className="text-lg sm:text-xl leading-relaxed text-[#a0aabf] relative z-10 w-11/12">
                                    Um simples "canetaço" pode congelar seus ativos antes que você possa reagir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
