import React from 'react';

const CTASection: React.FC = () => {
    return (
        <div className="bg-slate-900 py-16 px-4 animate-fade-in">
            <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">Pronto para acelerar sua carreira?</h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto animate-fade-in-up animate-delay-100">
                    O mercado está mudando rapidamente. Acompanhe as tendências e comece a desenvolver essas habilidades hoje mesmo.
                </p>
                <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-all hover:scale-105 hover-lift animate-bounce-in animate-delay-200">
                    Começar Jornada de Aprendizado
                </button>
            </div>
        </div>
    );
};

export default CTASection;
