import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SectionItem } from '../../../types';

interface CardsSectionProps {
    items: SectionItem[];
}

const CardsSection: React.FC<CardsSectionProps> = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {items.map((item, idx) => {
                const ItemIcon = item.icon || CheckCircle2;
                return (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                        <div className="mb-4 bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center text-blue-700">
                            <ItemIcon size={24} />
                        </div>
                        <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default CardsSection;
