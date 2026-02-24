import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.hero-anim',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100dvh] flex items-center justify-center pt-8 pb-8 sm:pt-0 sm:pb-0 overflow-hidden bg-navy-deep"
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-navy-deep" />
            <div className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />
            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />

            <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">

                {/* Brand Header Centered */}
                <div className="hero-anim flex flex-col items-center justify-center mb-6 sm:mb-10 lg:mb-12">
                    <img src="/images/Arena_Riqueza_logo.svg" alt="Arena da Riqueza" className="h-[70px] sm:h-[85px] md:h-24 w-auto mb-4 sm:mb-6" />
                    <span className="text-white/90 text-[10px] sm:text-xs md:text-[15px] font-playfair tracking-widest uppercase">Imersão Presencial: Mapa da Riqueza Global</span>
                </div>

                {/* Badges */}
                <div className="hero-anim flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[9px] sm:text-[11px] md:text-sm font-mono tracking-widest uppercase mb-6 sm:mb-8">
                    <div className="flex items-center gap-2 border border-white/10 py-1.5 px-3">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <span className="text-gray-400">Alerta de Risco Jurisdicional</span>
                    </div>
                </div>

                {/* Headline - Responsive with fluid text breaking */}
                <h1 className="hero-anim font-montserrat font-black text-[1.85rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.5rem] leading-[1.05] sm:leading-[1.05] text-white uppercase tracking-tighter mb-5 sm:mb-8 px-2 md:px-0">
                    Ter 100% do seu patrimônio<br className="hidden sm:block" /> no Brasil não é patriotismo.<br />
                    <span className="text-gold italic block mt-1 sm:mt-2">É incerteza política.</span>
                </h1>

                {/* Subtitle */}
                <p className="hero-anim text-body text-[14px] sm:text-lg md:text-xl max-w-[90%] sm:max-w-3xl lg:max-w-4xl mb-8 sm:mb-12 text-gray-300 leading-relaxed">
                    Você trabalha duro para construir riqueza, mas a instabilidade jurídica, a inflação e a corrupção corroem o seu dinheiro todos os dias. <strong>Descubra como os super-ricos protegem e dolarizam seus ativos longe do Risco Brasil.</strong>
                </p>

                {/* Info Grid */}
                <div className="hero-anim flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 font-mono text-xs sm:text-sm text-gray-400 mb-8 sm:mb-12 bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.02)] px-6 sm:px-10 py-4 sm:py-5 border border-white/10 w-fit">
                    <div className="flex items-center gap-3">
                        <span className="text-gold">📍</span> Balneário Camboriú, SC
                    </div>
                    <div className="hidden sm:block text-white/20">|</div>
                    <div className="flex items-center gap-3">
                        <span className="text-gold">📅</span> 04 de Abril de 2026
                    </div>
                    <div className="hidden sm:block text-white/20">|</div>
                    <div className="flex items-center gap-3">
                        <span className="text-gold">⏱️</span> 09h às 17h
                    </div>
                </div>

                {/* CTA */}
                <div className="hero-anim">
                    <button className="btn-gold text-[12px] sm:text-[15px] md:text-lg py-4 px-8 md:py-6 md:px-10">
                        Garantir minha vaga
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
