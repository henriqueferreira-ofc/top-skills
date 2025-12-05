import React from 'react';
import { SectionItem } from '../../../types';

interface ProcessSectionProps {
    items: SectionItem[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ items }) => {
    return (
        <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 md:hidden"></div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-4 justify-between mt-4">
                {items.map((item, idx) => (
                    <div key={idx} className="relative flex md:flex-col items-center flex-1 gap-4 md:gap-0">
                        <div className="w-8 h-8 rounded-full bg-white border-4 border-blue-500 z-10 md:mb-4 flex-shrink-0"></div>
                        <div
                            className="hidden md:block absolute top-4 left-0 right-0 h-0.5 bg-slate-200 -z-10"
                            style={{
                                left: idx === 0 ? '50%' : '0',
                                right: idx === items.length - 1 ? '50%' : '0'
                            }}
                        ></div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 w-full text-left md:text-center">
                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                            {item.description && <p className="text-xs text-slate-500 mt-1">{item.description}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProcessSection;
