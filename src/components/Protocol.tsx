import React from 'react';
import { CheckCircle2, Clock, Users } from 'lucide-react';

const Protocol: React.FC = () => {
    return (
        <section className="py-24 bg-[#03050a] relative border-t border-white/5 font-playfair">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide mb-2">Cronograma do Evento</h2>
                        <p className="font-mono text-gold text-xs font-bold tracking-[0.2em] uppercase">Agenda Executiva</p>
                    </div>
                    <div className="inline-flex items-center gap-3 border border-white/10 px-6 py-3 bg-black-abs/40 rounded-sm">
                        <Clock className="w-4 h-4 text-gold" />
                        <span className="text-gold font-mono text-sm font-semibold tracking-widest">09:00 - 17:00</span>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {/* MANHÃ Card */}
                    <div className="grid grid-cols-1 md:grid-cols-12 border border-white/5 bg-[#050812] group">
                        {/* Left Side */}
                        <div className="md:col-span-4 p-10 border-b md:border-b-0 md:border-r border-white/5 relative flex flex-col justify-center items-center text-center">
                            <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-gold"></div>
                            <h3 className="text-4xl font-bold text-white tracking-widest uppercase mb-4">Manhã</h3>
                            <span className="font-mono text-gold text-base tracking-widest uppercase">09:00 - 12:00</span>
                        </div>
                        {/* Right Side */}
                        <div className="md:col-span-8 p-10 md:p-14">
                            <h4 className="text-3xl font-bold text-white mb-10">Fundamentos da Soberania</h4>
                            <ul className="space-y-5 font-montserrat text-[#a0aabf]">
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-lg md:text-xl">A Engrenagem da Riqueza</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-lg md:text-xl">Eficiência vs. Sabedoria</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-lg md:text-xl">Equação de Fluxo de Caixa</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-lg md:text-xl">Armadilha do Crédito Brasileiro</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* INTERVAL Card */}
                    <div className="border border-white/5 bg-[#0a1128]/50 flex flex-col md:flex-row items-center justify-between p-6 px-8 relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold"></div>
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                            <Users className="w-6 h-6 text-gold" />
                            <span className="font-playfair font-bold text-xl text-white">Intervalo Livre para Networking</span>
                        </div>
                        <span className="font-mono text-gold text-base tracking-widest">12h às 13h30</span>
                    </div>

                    {/* TARDE Card */}
                    <div className="grid grid-cols-1 md:grid-cols-12 border border-white/5 bg-[#050812] group">
                        {/* Left Side */}
                        <div className="md:col-span-4 p-10 border-b md:border-b-0 md:border-r border-white/5 relative flex flex-col justify-center items-center text-center">
                            <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-gold"></div>
                            <h3 className="text-4xl font-bold text-white tracking-widest uppercase mb-4">Tarde</h3>
                            <span className="font-mono text-gold text-base tracking-widest uppercase">13:30 - 17:00</span>
                        </div>
                        {/* Right Side */}
                        <div className="md:col-span-8 p-10 md:p-14">
                            <h4 className="text-3xl font-bold text-white mb-10">Execução e Estratégia Global</h4>
                            <ul className="space-y-5 font-montserrat text-[#a0aabf]">
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-lg md:text-xl">Risco Jurisdicional</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-lg md:text-xl">Oásis da Riqueza Global</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-lg md:text-xl">Proteção Definitiva</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                                    <span className="text-lg md:text-xl">Estruturas Fiduciárias</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Protocol;
