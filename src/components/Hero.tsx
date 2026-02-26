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
            className="relative min-h-[100dvh] flex items-center justify-center pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-navy-deep"
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
                <h1 className="hero-anim font-montserrat font-black text-[1.5rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] text-white uppercase tracking-tighter mb-5 sm:mb-8 px-2 md:px-0 max-w-4xl mx-auto">
                    Uma única canetada em Brasília pode destruir o que você levou a vida toda para construir. <span className="text-gold italic">Ter 100% do seu patrimônio no Brasil não é patriotismo, é roleta russa.</span>
                </h1>

                {/* Subtitle */}
                <p className="hero-anim text-body text-lg sm:text-xl md:text-2xl max-w-[90%] sm:max-w-4xl lg:max-w-5xl mb-8 sm:mb-12 text-gray-300 leading-relaxed mx-auto">
                    O sistema quer manter você refém da insegurança, da inflação e de impostos abusivos. Descubra como acessar o que existe de mais sofisticado no mercado financeiro global e proteger o seu patrimônio nos países mais ricos e seguros do mundo.
                </p>

                {/* Info Grid */}
                <div className="hero-anim flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 font-mono text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.02)] px-6 sm:px-10 py-4 sm:py-6 border border-white/10 w-fit">
                    <div className="flex items-center gap-3">
                        <span className="text-gold">📍</span> Balneário Camboriú, SC
                    </div>
                    <div className="hidden sm:block text-white/20">|</div>
                    <div className="flex items-center gap-3">
                        <span className="text-gold">📅</span> 28 de Março de 2026
                    </div>
                </div>

                {/* CTA */}
                <div className="hero-anim">
                    <button className="btn-gold text-[12px] sm:text-[15px] md:text-lg py-4 px-8 md:py-6 md:px-10 mb-4">
                        QUERO PROTEGER MEU PATRIMÔNIO AGORA
                    </button>
                    <p className="text-[10px] sm:text-xs text-gray-500 font-mono tracking-widest uppercase">
                        Vagas limitadas para a Imersão: Mapa da Riqueza Global.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
