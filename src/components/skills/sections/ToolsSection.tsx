import React from 'react';
import { Settings } from 'lucide-react';
import { SectionItem } from '../../../types';

interface ToolsSectionProps {
    items: SectionItem[];
}

const ToolsSection: React.FC<ToolsSectionProps> = ({ items }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {items.map((item, idx) => {
                const ToolIcon = item.icon || Settings;
                return (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <ToolIcon className="text-slate-500 mb-3" size={32} />
                        <span className="text-sm font-medium text-slate-700 text-center">{item.title}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default ToolsSection;
