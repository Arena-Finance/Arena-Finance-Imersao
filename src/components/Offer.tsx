import React from 'react';
import { CheckCircle2, Shield } from 'lucide-react';

const Offer: React.FC = () => {

    const items = [
        "Acesso integral ao dia de imersão presencial (09h às 17h).",
        "Acesso ao conhecimento de inteligência macroeconômica e proteção patrimonial.",
        "Material didático e certificação.",
        "Networking de elite."
    ];

    return (
        <section className="py-24 bg-black-abs relative border-t border-white/5 flex items-center justify-center">

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                {/* The Card */}
                <div className="w-full max-w-2xl bg-[#03050a] border border-white/5 rounded-none p-8 md:p-14 relative overflow-hidden">

                    <div className="text-center mb-10">
                        <p className="font-mono text-gold text-xs uppercase tracking-[0.2em] font-bold mb-8">Primeiro lote disponível</p>
                        <h2 className="font-playfair text-5xl md:text-6xl font-bold leading-tight text-white mb-4">Imersão Presencial</h2>
                        <h3 className="font-playfair text-3xl md:text-4xl font-bold leading-tight text-gold">Balneário Camboriú, SC</h3>
                    </div>

                    <div className="w-full h-[1px] bg-white/5 my-10"></div>

                    <ul className="offer-list space-y-6 mb-10">
                        {items.map((item, idx) => (
                            <li key={idx} className="offer-list-item flex items-center pl-4 md:pl-10">
                                <CheckCircle2 className="w-6 h-6 text-gold mr-6 flex-shrink-0" />
                                <span className="font-montserrat text-[#a0aabf] text-lg md:text-xl">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="w-full h-[1px] bg-white/5 my-10"></div>

                    <div className="text-center pt-2">
                        <p className="font-montserrat text-gray-500 font-semibold line-through decoration-gray-500/50 decoration-1 text-lg mb-4">R$ 997,00</p>
                        <div className="flex items-center justify-center font-playfair font-bold text-gold mb-12">
                            <span className="text-6xl md:text-8xl tracking-tight">R$ 497,00</span>
                        </div>

                        <button className="w-full bg-[#c9a039] hover:bg-[#d5ad45] text-black-abs font-black text-xl md:text-2xl py-6 px-10 font-montserrat tracking-widest uppercase transition-all duration-300">
                            INSCREVA-SE AGORA
                        </button>

                        <div className="mt-8 flex flex-col items-center justify-center text-[10px] sm:text-xs font-mono text-gold/80 uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4" /> Pagamento Seguro
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
