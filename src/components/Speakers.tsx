import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const speakers = [
    {
        name: "Otávio Moura",
        role: "Planejador Financeiro & Estrategista",
        image: "/speakers/otavio_v2.png",
        bio: "Empresário e estrategista de crescimento patrimonial com mais de 15 anos de experiência no Mercado Financeiro. Formado em Contabilidade e pós-graduado em Psicanálise Clínica, une análise técnica e visão comportamental para estruturar decisões financeiras sólidas em bancos de primeira linha sob legislações internacionais seguras."
    },
    {
        name: "Daniela Rabello",
        role: "Advogada Empresarial & Patrimonial",
        image: "/speakers/daniela_v2.png",
        bio: "Especialista em gestão de risco, contratos e estruturação jurídica patrimonial desde 2006. Atua na regularização imobiliária e proteção de ativos, garantindo segurança jurídica e eficiência na blindagem do patrimônio contra instabilidades domésticas."
    },
    {
        name: "Michele Tolazzi",
        role: "CEO Arena da Riqueza & Estrategista",
        image: "/speakers/michele_v3.jpg",
        bio: "Empresária e estrategista de negócios focada na estruturação, gestão e expansão de operações no setor de crédito. Como CEO da Arena da Riqueza, lidera a performance comercial e organização estratégica voltada ao crescimento patrimonial sustentável."
    }
];

const Speakers: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".speaker-header", {
                y: 30,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".speaker-header",
                    start: "top 85%",
                }
            });

            cardsRef.current.forEach((card, i) => {
                gsap.from(card, {
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    delay: i * 0.15,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 bg-black-abs relative overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-navy-deep/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-12 speaker-header">
                    <span className="text-gold font-mono text-xs md:text-sm tracking-[0.4em] uppercase mb-4 block">Estrategistas de Elite</span>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8">
                        Autoridades Confirmadas
                    </h2>
                    <div className="w-16 h-[2px] bg-gold/50 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
                    {speakers.map((speaker, index) => (
                        <div
                            key={index}
                            ref={(el) => { if (el) cardsRef.current[index] = el; }}
                            className="group flex flex-col items-center text-center"
                        >
                            {/* Cinematic Portrait Container - Ampliado para impacto visual */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 overflow-hidden rounded-full bg-black-abs border border-white/5 transition-all duration-700 group-hover:border-gold/30 shadow-[0_0_50px_rgba(0,0,0,1)]">
                                {/* Depth Lights */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.08),transparent_70%)] opacity-40 group-hover:opacity-100 transition-opacity duration-700" />

                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-[1.05] relative z-10"
                                />
                            </div>

                            {/* Content - Tipografia Calibrada */}
                            <div className="px-4">
                                <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2 tracking-tight group-hover:text-gold transition-colors duration-300">
                                    {speaker.name}
                                </h3>
                                <p className="text-gold font-mono text-xs uppercase tracking-[0.25em] mb-6 block opacity-80">
                                    {speaker.role}
                                </p>
                                <p className="text-[#a0aabf] font-montserrat text-lg md:text-xl leading-relaxed max-w-sm mx-auto">
                                    {speaker.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Speakers;
