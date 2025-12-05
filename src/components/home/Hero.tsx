import React from 'react';

const Hero: React.FC = () => {
    const scrollToSkills = () => {
        const el = document.getElementById('skills-grid');
        el?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-gradient-to-b from-slate-100 to-slate-50 py-16 md:py-24 px-4 text-center">
            <div className="max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
                    Job Market Report
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight animate-fade-in-up animate-delay-100">
                    As 10 Principais Habilidades <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient">
                        do Mercado 2025-2030
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
                    Prepare-se para o futuro do trabalho. Descubra as competências essenciais para navegar a transformação digital e liderar na próxima década.
                </p>
                <div className="flex justify-center gap-4 animate-fade-in-up animate-delay-300">
                    <button
                        onClick={scrollToSkills}
                        className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-1 hover-glow"
                    >
                        Explorar Habilidades
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
