import React from 'react';
import { Shield } from 'lucide-react';

const Offer: React.FC = () => {

    return (
        <section className="py-24 bg-black-abs relative border-t border-white/5 flex items-center justify-center">

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                {/* The Card */}
                <div className="w-full max-w-2xl bg-[#03050a] border border-white/5 rounded-none p-8 md:p-14 relative overflow-hidden">

                    <div className="text-center mb-10">
                        <p className="font-mono text-gold text-xs uppercase tracking-[0.2em] font-bold mb-8">Última oportunidade disponível</p>
                        <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                            A próxima crise não vai avisar antes de chegar.
                        </h2>
                    </div>

                    <div className="w-full h-[1px] bg-white/5 my-10"></div>

                    <p className="font-montserrat text-[#a0aabf] text-lg leading-relaxed text-center mb-10 px-4">
                        O momento de consertar o telhado é quando faz sol. Quando a próxima canetada acontecer, já será tarde demais para tentar tirar o seu dinheiro do país de forma barata. **Aja agora.**
                    </p>

                    {/* Lots Information Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 text-center">
                        <div className="p-4 border border-gold/30 bg-gold/5 rounded-sm">
                            <p className="font-mono text-gold text-[10px] uppercase font-bold mb-2">Lote 01 (Atual)</p>
                            <p className="font-playfair text-white text-xl font-bold mb-1">R$ 497,00</p>
                            <p className="text-[10px] text-gray-400 leading-tight">Direito acompanhante (cônjuge ou sócio)</p>
                            <p className="text-[10px] text-gold mt-2 font-mono">Até 02.03</p>
                        </div>
                        <div className="p-4 border border-white/5 bg-white/5 rounded-sm opacity-50">
                            <p className="font-mono text-gray-400 text-[10px] uppercase font-bold mb-2">Lote 02</p>
                            <p className="font-playfair text-white text-xl font-bold mb-1">R$ 997,00</p>
                            <p className="text-[10px] text-gray-400 leading-tight">Ingresso Individual</p>
                            <p className="text-[10px] text-gray-400 mt-2 font-mono">03.03 até 15.03</p>
                        </div>
                        <div className="p-4 border border-white/5 bg-white/5 rounded-sm opacity-50">
                            <p className="font-mono text-gray-400 text-[10px] uppercase font-bold mb-2">Lote 03</p>
                            <p className="font-playfair text-white text-xl font-bold mb-1">R$ 1.997,00</p>
                            <p className="text-[10px] text-gray-400 leading-tight">Ingresso Individual</p>
                            <p className="text-[10px] text-gray-400 mt-2 font-mono">16.03 em diante</p>
                        </div>
                    </div>

                    <div className="text-center pt-2">
                        <div className="flex flex-col items-center justify-center font-playfair font-bold text-gold mb-10">
                            <span className="text-sm font-mono uppercase tracking-[0.2em] mb-2 text-gray-500">Valor Atual Lote 01</span>
                            <span className="text-6xl md:text-8xl tracking-tight">R$ 497,00</span>
                        </div>

                        <button className="w-full bg-[#c9a039] hover:bg-[#d5ad45] text-black-abs font-black text-xl md:text-2xl py-6 px-10 font-montserrat tracking-widest uppercase transition-all duration-300">
                            GARANTIR MINHA VAGA E PROTEGER MEU FUTURO
                        </button>

                        <div className="mt-8 flex flex-col items-center justify-center text-[10px] sm:text-xs font-mono text-gold/80 uppercase tracking-widest">
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4" /> Vagas Limitadas
                                </div>
                                <span className="text-white/60">Balneário Camboriú, SC | 28 de Março de 2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
