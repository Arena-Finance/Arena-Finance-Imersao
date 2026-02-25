import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Audience: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.audience-column',
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    stagger: 0.3,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 70%',
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-black-abs relative border-t border-white/5 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20">
                    <p className="font-mono text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">Qualificação</p>
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white tracking-wide">
                        Esta imersão é para você?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Para quem é */}
                    <div className="audience-column bg-[#050812] border border-gold/10 p-10 rounded-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[60px] rounded-full group-hover:bg-gold/10 transition-all"></div>
                        <h3 className="font-playfair text-3xl font-bold text-gold mb-8 flex items-center gap-3">
                            <Check className="w-8 h-8 text-gold" />
                            Para quem é
                        </h3>
                        <p className="font-montserrat text-[#a0aabf] text-lg leading-relaxed">
                            Empresários, investidores e profissionais que já entenderam que o Brasil é perigoso demais para concentrar 100% dos seus esforços e finanças, e buscam sofisticação, paz de espírito e a segurança de ativos em moeda forte.
                        </p>
                    </div>

                    {/* Para quem NÃO é */}
                    <div className="audience-column bg-[#050812] border border-white/5 p-10 rounded-sm relative overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all group">
                        <h3 className="font-playfair text-3xl font-bold text-gray-400 mb-8 flex items-center gap-3">
                            <X className="w-8 h-8 text-red-500/50" />
                            Para quem NÃO é
                        </h3>
                        <p className="font-montserrat text-[#a0aabf] text-lg leading-relaxed">
                            Pessoas que acreditam cegamente nas promessas políticas do país, aceitam ver seu patrimônio ser corroído pela inflação em silêncio ou têm medo de expandir seus horizontes além das fronteiras brasileiras.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Audience;
