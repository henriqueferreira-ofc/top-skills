import React from 'react';
import { Skill } from '../../types';
import { ArrowLeft } from 'lucide-react';
import SectionRenderer from './sections/SectionRenderer';

interface SkillDetailProps {
    skill: Skill;
    onBack: () => void;
}

const SkillDetail: React.FC<SkillDetailProps> = ({ skill, onBack }) => {
    const Icon = skill.icon;

    return (
        <div className="animate-fade-in-up">
            <div className={`${skill.color} text-white py-16 px-6 md:px-12 relative overflow-hidden`}>
                <button
                    onClick={onBack}
                    className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition-all bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm z-10 hover:scale-105 hover-glow"
                >
                    <ArrowLeft size={18} />
                    <span className="font-medium text-sm">Voltar</span>
                </button>

                <div className="max-w-4xl mx-auto relative z-10 mt-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-6 animate-fade-in">
                        <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md w-fit animate-float">
                            <Icon size={48} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight animate-slide-in-right">
                                {skill.title}
                            </h1>
                            <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-light opacity-90 animate-slide-in-right animate-delay-100">
                                {skill.fullDefinition}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decorative background circle */}
                <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12">
                {skill.sections.map((section, idx) => (
                    <div
                        key={idx}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${idx * 150}ms` }}
                    >
                        <SectionRenderer section={section} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillDetail;
