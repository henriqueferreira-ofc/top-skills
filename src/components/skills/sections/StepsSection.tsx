import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SectionItem } from '../../../types';

interface StepsSectionProps {
    items: SectionItem[];
}

const StepsSection: React.FC<StepsSectionProps> = ({ items }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
            {items.map((item, idx) => (
                <React.Fragment key={idx}>
                    <div className="flex flex-col items-center text-center p-4 w-full md:w-1/4 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-3 shadow-md">
                            {idx + 1}
                        </div>
                        <span className="font-semibold text-blue-900">{item.title}</span>
                    </div>
                    {idx < items.length - 1 && (
                        <div className="hidden md:block text-slate-300">
                            <ChevronRight size={24} />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default StepsSection;
