import React from 'react';
import { Skill } from '../../types';
import { ArrowRight } from 'lucide-react';

interface SkillCardProps {
    skill: Skill;
    onClick: (skill: Skill) => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, onClick }) => {
    const Icon = skill.icon;

    return (
        <div
            onClick={() => onClick(skill)}
            className="group bg-white rounded-xl shadow-sm border border-slate-200 p-6 cursor-pointer hover-lift transition-all duration-300 flex flex-col h-full animate-scale-in"
        >
            <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${skill.color} text-white transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon size={24} />
                </div>
                <div className="bg-slate-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight size={20} className="text-slate-400" />
                </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                {skill.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {skill.shortDescription}
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider group-hover:underline inline-flex items-center gap-1">
                    Saiba Mais
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
            </div>
        </div>
    );
};

export default SkillCard;
