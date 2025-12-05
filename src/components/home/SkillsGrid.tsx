import React from 'react';
import { Skill } from '../../types';
import SkillCard from '../skills/SkillCard';

interface SkillsGridProps {
    skills: Skill[];
    onSkillClick: (skill: Skill) => void;
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills, onSkillClick }) => {
    return (
        <div id="skills-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={skill.id}
                        className={`animate-fade-in-up`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <SkillCard
                            skill={skill}
                            onClick={onSkillClick}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsGrid;
