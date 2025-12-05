import React, { useState, useEffect } from 'react';
import { SKILLS_DATA } from './data/skills';
import { Skill } from './types';
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import SkillsGrid from './components/home/SkillsGrid';
import CTASection from './components/home/CTASection';
import SkillDetail from './components/skills/SkillDetail';

const App: React.FC = () => {
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

    // Scroll to top when switching views
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedSkill]);

    const handleHomeClick = () => {
        setSelectedSkill(null);
    };

    const handleSkillClick = (skill: Skill) => {
        setSelectedSkill(skill);
    };

    return (
        <Layout onHomeClick={handleHomeClick}>
            {selectedSkill ? (
                <SkillDetail
                    skill={selectedSkill}
                    onBack={handleHomeClick}
                />
            ) : (
                <>
                    <Hero />
                    <SkillsGrid
                        skills={SKILLS_DATA}
                        onSkillClick={handleSkillClick}
                    />
                    <CTASection />
                </>
            )}
        </Layout>
    );
};

export default App;
