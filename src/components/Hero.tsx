import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.hero-anim',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
            );

            gsap.fromTo('.hero-anim-right',
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.4 }
            );

            gsap.fromTo('.hero-float',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)', delay: 0.8 }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100dvh] w-full overflow-hidden bg-navy-deep flex flex-col justify-center"
        >
            {/* Split Screen Background - Right Side Polygon */}
            {/* The reference has a bright gradient. We use a premium dark gradient with a gold subtle hint */}
            <div
                className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-0 bg-gradient-to-br from-[#0c132b] via-black-abs to-black-abs opacity-90"
                style={{
                    clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
                    WebkitClipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
                }}
            >
                {/* Wavy line texture simulation for the right side */}
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="wave" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 0 20 Q 25 0 50 20 T 100 20" fill="none" stroke="#D4AF37" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#wave)" />
                </svg>
            </div>

            {/* Otávio Full Height Photo */}
            <img
                src="/images/otavio_hero_5_cutout.png"
                alt="Otávio Moura"
                className="hero-anim-right absolute z-0 sm:z-10 bottom-0 right-[-15%] sm:right-[-10%] md:right-[0%] lg:right-[0%] xl:right-[5%] h-[65%] sm:h-[100%] w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter contrast-110 grayscale-[10%] pointer-events-none opacity-40 sm:opacity-100"
            />

            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 min-h-[100dvh] flex flex-row items-center justify-between pointer-events-none">

                {/* Left Column: Content */}
                <div className="w-[85%] sm:w-[60%] lg:w-[50%] flex flex-col items-start text-left pb-12 lg:pb-0 pointer-events-auto mt-12 sm:mt-0">

                    {/* Logo */}
                    <div className="hero-anim w-full lg:w-[90%] xl:w-[85%] flex justify-start mb-6">
                        <img src="/images/Arena_Riqueza_logo.svg" alt="Arena da Riqueza" className="h-[50px] sm:h-[70px] md:h-[90px] w-auto drop-shadow-md" />
                    </div>

                    {/* Tag / Overhead (Red text in reference) */}
                    <div className="hero-anim flex items-center mb-4">
                        <span className="text-red-500 font-mono text-[9px] sm:text-[11px] tracking-widest uppercase font-bold">
                            Alerta Jurisdicional 2026
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="hero-anim font-montserrat font-black text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[3.5rem] leading-[1.05] text-white uppercase tracking-tighter mb-6 relative">
                        UMA ÚNICA CANETADA EM BRASÍLIA
                        <br />
                        <span className="text-white">PODE DESTRUIR</span>
                        <br />
                        <span className="text-gold italic font-playfair tracking-normal normal-case text-[2.2rem] sm:text-[2.8rem] md:text-[3.6rem] lg:text-[4rem] leading-none block mt-2">
                            A sua vida toda.
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-anim text-body text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-[90%] font-medium">
                        Ter 100% do seu patrimônio no Brasil não é patriotismo, é roleta russa. Descubra como acessar o que existe de mais sofisticado no mercado global. O risco real que você corre hoje é incalculável.
                    </p>

                    {/* Button */}
                    <div className="hero-anim flex flex-col sm:flex-row items-start gap-4 w-full sm:w-auto mt-2">
                        <button
                            onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-gold hover:bg-white text-black-abs px-6 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 font-bold font-mono text-[10px] sm:text-sm md:text-base uppercase tracking-widest transition-all duration-300 w-auto text-center whitespace-nowrap"
                            style={{ borderRadius: '40px' }}
                        >
                            GARANTA MINHA VAGA AGORA
                        </button>
                    </div>
                </div>

                {/* Right Column: Floating Card */}
                <div className="w-[15%] sm:w-[40%] lg:w-[50%] relative h-[100dvh] flex justify-center lg:justify-end items-center pointer-events-auto">

                    {/* Floating Glass Card (Event Info) Overlapping the photo */}
                    <div className="hero-float hidden sm:block absolute bottom-[15%] sm:bottom-[15%] lg:bottom-[10%] xl:bottom-[15%] right-[2%] sm:right-[5%] lg:right-[10%] xl:right-[15%] w-[165px] sm:w-[280px] lg:w-full max-w-[280px] sm:max-w-[320px] bg-[#0c132b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20">
                        <p className="text-gray-400 text-[8px] sm:text-[10px] uppercase tracking-widest font-mono mb-1.5 sm:mb-2">Imersão Exclusiva</p>
                        <h3 className="text-white font-montserrat font-bold text-[11px] sm:text-lg leading-tight mb-2.5 sm:mb-4">Mapa da Riqueza Global</h3>

                        <div className="flex flex-col gap-1.5 sm:gap-3">
                            <div className="flex items-center gap-1.5 sm:gap-3 text-[9px] sm:text-sm text-gray-300 leading-none">
                                <span className="text-gold flex-shrink-0">
                                    <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </span>
                                <span className="truncate">Balneário Camboriú, SC</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-3 text-[9px] sm:text-sm text-gray-300 leading-none">
                                <span className="text-gold flex-shrink-0">
                                    <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                </span>
                                <span className="truncate">28 de Março, 2026</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-3 text-[9px] sm:text-sm text-gray-300 leading-none">
                                <span className="text-gold flex-shrink-0">
                                    <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </span>
                                <span className="truncate">09h às 17h</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </section>
    );
};

export default Hero;
