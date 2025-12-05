import React from 'react';
import { Section } from '../../../types';
import TextSection from './TextSection';
import ListSection from './ListSection';
import CardsSection from './CardsSection';
import ToolsSection from './ToolsSection';
import StepsSection from './StepsSection';
import ProcessSection from './ProcessSection';

interface SectionRendererProps {
    section: Section;
}

const SectionRenderer: React.FC<SectionRendererProps> = ({ section }) => {
    const renderContent = () => {
        switch (section.type) {
            case 'text':
                return section.content ? <TextSection content={section.content} /> : null;

            case 'list':
                return section.items ? <ListSection items={section.items} /> : null;

            case 'cards':
                return section.items ? <CardsSection items={section.items} /> : null;

            case 'tools':
                return section.items ? <ToolsSection items={section.items} /> : null;

            case 'steps':
                return section.items ? <StepsSection items={section.items} /> : null;

            case 'process':
                return section.items ? <ProcessSection items={section.items} /> : null;

            default:
                return null;
        }
    };

    return (
        <div className="mb-12 last:mb-0">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                {section.title}
            </h3>
            {renderContent()}
        </div>
    );
};

export default SectionRenderer;
