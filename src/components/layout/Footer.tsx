import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-12 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-slate-500 text-sm">
                    © 2024 FutureSkills Hub. Todos os direitos reservados.
                </p>
                <div className="flex justify-center gap-6 mt-4 text-sm text-slate-400">
                    <a href="#" className="hover:text-blue-600 transition-all hover:-translate-y-0.5">Privacidade</a>
                    <a href="#" className="hover:text-blue-600 transition-all hover:-translate-y-0.5">Termos de Uso</a>
                    <a href="#" className="hover:text-blue-600 transition-all hover:-translate-y-0.5">Contato</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
