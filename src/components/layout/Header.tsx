import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
    onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
    return (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 bg-opacity-90 backdrop-blur-md animate-slide-in-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer group" onClick={onHomeClick}>
                    <div className="bg-blue-600 p-1.5 rounded-lg text-white transition-transform group-hover:scale-110 group-hover:rotate-12">
                        <Sparkles size={20} fill="currentColor" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-900">
                        FutureSkills<span className="text-blue-600">Hub</span>
                    </span>
                </div>

                <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                    <button onClick={onHomeClick} className="hover:text-blue-600 transition-all hover:-translate-y-0.5">
                        Home
                    </button>
                    <span className="cursor-not-allowed opacity-50">Career Path</span>
                    <span className="cursor-not-allowed opacity-50">About</span>
                </nav>

                <a
                    href="#"
                    className="hidden md:flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-all hover:scale-105 hover-glow"
                >
                    Relatório 2030 <ArrowUpRight size={14} />
                </a>
            </div>
        </header>
    );
};

export default Header;
