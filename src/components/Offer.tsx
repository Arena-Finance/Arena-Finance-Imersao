import React, { useMemo } from 'react';
import { Shield } from 'lucide-react';

const Offer: React.FC = () => {
    // Current date for simulation or real usage
    // Using 2026 as the reference year since the event is in 2026
    const now = new Date();

    const lots = useMemo(() => [
        {
            id: 1,
            name: "Lote 01",
            price: "599,00",
            originalPrice: "997,00",
            desc: "Ingresso Individual",
            dateRange: "Até 02.03",
            endDate: new Date('2026-03-03T00:00:00') // Ends at the start of March 3rd
        },
        {
            id: 2,
            name: "Lote 02",
            price: "997,00",
            desc: "Ingresso Individual",
            dateRange: "03.03 até 15.03",
            endDate: new Date('2026-03-16T00:00:00') // Ends at the start of March 16th
        },
        {
            id: 3,
            name: "Lote 03",
            price: "1.997,00",
            desc: "Ingresso Individual",
            dateRange: "16.03 até 26.03",
            endDate: new Date('2026-03-27T00:00:00') // Ends after Mar 26th
        }
    ], []);

    const currentLotIndex = useMemo(() => {
        const index = lots.findIndex(lot => now < lot.endDate);
        return index === -1 ? lots.length - 1 : index;
    }, [lots, now]);

    const activeLot = lots[currentLotIndex];

    return (
        <section id="offer" className="py-24 bg-black-abs relative border-t border-white/5 flex items-center justify-center">

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                {/* The Card */}
                <div className="w-full max-w-2xl bg-[#03050a] border border-white/5 rounded-none p-8 md:p-14 relative overflow-hidden text-center">

                    <div className="mb-10 text-center">
                        <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                            A próxima crise não vai avisar antes de chegar.
                        </h2>
                    </div>

                    <div className="w-full h-[1px] bg-white/5 my-10"></div>

                    <p className="font-montserrat text-[#a0aabf] text-lg leading-relaxed mb-10 px-4">
                        O momento de consertar o telhado é quando faz sol. Quando a próxima canetada acontecer, já será tarde demais para tentar tirar o seu dinheiro do país de forma barata. **Aja agora.**
                    </p>

                    {/* Lots Information Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {lots.map((lot, index) => {
                            const isCurrent = index === currentLotIndex;
                            return (
                                <div
                                    key={lot.id}
                                    className={`p-6 border transition-all duration-500 rounded-sm relative flex flex-col justify-between min-h-[180px] ${isCurrent
                                        ? 'border-gold bg-gold/10 scale-105 shadow-[0_0_30px_rgba(212,175,55,0.2)] z-10'
                                        : 'border-white/10 bg-white/5 opacity-70'
                                        }`}
                                >
                                    {isCurrent && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black-abs font-mono font-bold text-[10px] px-3 py-1 uppercase tracking-widest shadow-lg">
                                            Lote Atual
                                        </div>
                                    )}
                                    <div>
                                        <p className={`font-mono text-[11px] uppercase font-bold mb-3 tracking-widest ${isCurrent ? 'text-gold' : 'text-gray-400'}`}>
                                            {lot.name}
                                        </p>
                                        {isCurrent && lot.originalPrice && (
                                            <p className="text-gray-500 line-through text-xs font-mono mb-1">R$ {lot.originalPrice}</p>
                                        )}
                                        <p className="font-playfair text-white text-3xl font-bold mb-2">R$ {lot.price}</p>
                                        <p className={`text-[11px] leading-snug mb-4 ${isCurrent ? 'text-white/90' : 'text-gray-400'}`}>
                                            {lot.desc}
                                        </p>
                                    </div>
                                    <p className={`text-[11px] font-mono font-bold tracking-tight ${isCurrent ? 'text-gold' : 'text-gray-500'}`}>
                                        {lot.dateRange}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center pt-4">
                        <div className="flex flex-col items-center justify-center font-playfair font-bold text-gold mb-12">
                            <span className="text-sm font-mono uppercase tracking-[0.3em] mb-4 text-gray-500">
                                Investimento Atual {activeLot.name}
                            </span>
                            {activeLot.originalPrice && (
                                <span className="text-xl md:text-2xl text-gray-500 line-through font-mono mb-2">R$ {activeLot.originalPrice}</span>
                            )}
                            <span className="text-7xl md:text-9xl tracking-tighter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">R$ {activeLot.price}</span>
                            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] mt-4 text-white/40 italic">{activeLot.desc}</span>
                        </div>

                        <a href="https://www.sympla.com.br/evento/imersao-mapa-da-riqueza-global-protecao-e-inteligencia-patrimonial/3327063" target="_blank" rel="noopener noreferrer" className="block w-full bg-[#c9a039] hover:bg-[#d5ad45] text-black-abs font-black text-xl md:text-3xl py-7 px-10 font-montserrat tracking-widest uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(201,160,57,0.2)] hover:shadow-[0_15px_40px_rgba(201,160,57,0.3)] hover:-translate-y-1">
                            GARANTIR MINHA VAGA AGORA
                        </a>

                        <div className="mt-10 flex flex-col items-center justify-center text-[10px] sm:text-xs font-mono text-gold/80 uppercase tracking-widest leading-relaxed">
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 border border-white/5">
                                    <Shield className="w-4 h-4 text-gold" /> Vagas Limitadas por Ordem de Compra
                                </div>
                                <span className="text-white/60 tracking-[0.2em] mt-2">Balneário Camboriú, SC | 28 de Março de 2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
