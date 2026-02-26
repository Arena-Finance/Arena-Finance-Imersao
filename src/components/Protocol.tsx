import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Protocol: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.protocol-item',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-[#03050a] relative border-t border-white/5 font-playfair overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <p className="font-mono text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Entrega de Valor</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide mb-6 leading-tight md:leading-snug">
                        O seu passaporte para a verdadeira liberdade financeira.
                    </h2>
                    <div className="w-24 h-[1px] bg-gold mx-auto opacity-50"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Item 1 */}
                    <div className="protocol-item flex items-start gap-6 p-8 bg-[#050812] border border-white/5 hover:border-gold/20 transition-all group">
                        <CheckCircle2 className="w-8 h-8 text-gold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Dolarização Inteligente</h3>
                            <p className="font-montserrat text-[#a0aabf] text-base md:text-lg leading-relaxed">
                                Como tirar o seu dinheiro do Brasil de forma legal e segura, fugindo do risco cambial.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="protocol-item flex items-start gap-6 p-8 bg-[#050812] border border-white/5 hover:border-gold/20 transition-all group">
                        <CheckCircle2 className="w-8 h-8 text-gold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Jurisdições Seguras</h3>
                            <p className="font-montserrat text-[#a0aabf] text-base md:text-lg leading-relaxed">
                                Onde estão os melhores países para proteger o seu dinheiro e como abrir contas no exterior sem burocracia inútil.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="protocol-item flex items-start gap-6 p-8 bg-[#050812] border border-white/5 hover:border-gold/20 transition-all group">
                        <CheckCircle2 className="w-8 h-8 text-gold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Acesso a Ativos Premium</h3>
                            <p className="font-montserrat text-[#a0aabf] text-base md:text-lg leading-relaxed">
                                Como investir nos mesmos ativos sofisticados utilizados pelas famílias mais ricas do mundo.
                            </p>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="protocol-item flex items-start gap-6 p-8 bg-[#050812] border border-white/5 hover:border-gold/20 transition-all group">
                        <CheckCircle2 className="w-8 h-8 text-gold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Proteção Patrimonial</h3>
                            <p className="font-montserrat text-[#a0aabf] text-base md:text-lg leading-relaxed">
                                Como criar um escudo ao redor do futuro financeiro da sua família, tornando-o inalcançável para as instabilidades brasileiras.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Protocol;
