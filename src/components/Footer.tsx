import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black-abs pt-24 pb-12 rounded-t-[4rem] relative z-20 overflow-hidden border-t border-white/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                <div className="mb-16">
                    <p className="text-body text-2xl font-playfair italic text-white/90 mb-10 max-w-3xl leading-relaxed">
                        "Quem tem bom senso não espera o país quebrar para comprar o bote salva-vidas. As vagas presenciais em Balneário Camboriú são <strong className="text-gold font-black not-italic border-b border-gold/50">restritas pelo espaço físico</strong> e para garantir a qualidade extrema das conexões na sala."
                    </p>
                    <button className="btn-gold py-5 px-10 rounded-sm">
                        Quero Minha Vaga Antes Que Esgote
                    </button>
                </div>

                {/* Logo */}
                <div className="mb-16 flex flex-col items-center">
                    <img
                        src="/images/Arena_Riqueza_logo.svg"
                        alt="Arena da Riqueza"
                        className="h-16 w-auto object-contain mb-3"
                    />
                    <p className="font-mono text-xs uppercase tracking-widest text-gray-600">
                        Powered by Arena da Riqueza
                    </p>
                </div>

                {/* Disclaimer */}
                <div className="border-t border-white/5 pt-10">
                    <p className="text-[10px] sm:text-xs text-gray-600 font-montserrat leading-relaxed text-justify sm:text-center max-w-4xl">
                        A Arena Finance e a Arena da Riqueza atuam exclusivamente com educação financeira e networking. Não somos corretora de valores, consultoria individualizada ou gestora de recursos registrada na CVM ou SEC. O conteúdo da imersão tem caráter 100% educacional, não configurando oferta pública, recomendação ou indicação de compra/venda de ativos financeiros. Investimentos envolvem riscos. As decisões tomadas a partir do conhecimento adquirido são de exclusiva responsabilidade do aluno.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
