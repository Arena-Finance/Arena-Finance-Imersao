import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Landmark, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Features: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.feature-card',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.features-grid',
                        start: 'top 75%',
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const cards = [
        {
            icon: <Globe className="w-8 h-8 text-gold block" />,
            title: "Jurisdições Seguras",
            desc: "Identifique países que respeitam a propriedade privada e oferecem segurança jurídica real para seu capital."
        },
        {
            icon: <Landmark className="w-8 h-8 text-gold block" />,
            title: "Acesso a Crédito Global",
            desc: "Aprenda a acessar as menores taxas de juros do mundo e alavancar seu patrimônio em moeda forte."
        },
        {
            icon: <Shield className="w-8 h-8 text-gold block" />,
            title: "Escudo Legal",
            desc: "Estruturas offshore, trusts e fundações para proteção patrimonial e blindagem contra litígios."
        }
    ];

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-black-abs relative border-t border-white/5 overflow-hidden">
            {/* Background Abstract Waves */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 200 Q 250 100 500 200 T 1000 200 T 1500 200" fill="none" stroke="#D4AF37" strokeWidth="2" />
                    <path d="M0 400 Q 250 300 500 400 T 1000 400 T 1500 400" fill="none" stroke="#D4AF37" strokeWidth="2" />
                    <path d="M0 600 Q 250 500 500 600 T 1000 600 T 1500 600" fill="none" stroke="#D4AF37" strokeWidth="2" />
                </svg>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <p className="font-mono text-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">Metodologia Exclusiva</p>
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white/95 tracking-wide">
                        Os 3 Pilares da Soberania
                    </h2>
                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
                    <p className="text-body text-[#a0aabf] text-lg leading-relaxed">
                        Nesta imersão, você não aprenderá teoria. Você sairá com um plano de ação para internacionalizar sua vida financeira.
                    </p>
                </div>

                <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {cards.map((card, idx) => (
                        <div key={idx} className="feature-card bg-[#050812] border border-white/5 p-10 relative overflow-hidden group hover:border-gold/20 transition-colors duration-500 rounded-sm">
                            <div className="mb-8">
                                {card.icon}
                            </div>
                            <h3 className="font-playfair text-2xl font-bold mb-4 text-white group-hover:text-gold transition-colors pr-4">
                                {card.title}
                            </h3>
                            <p className="font-montserrat text-[#a0aabf] leading-relaxed text-sm">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
