import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SectionItem } from '../../../types';

interface ListSectionProps {
    items: SectionItem[];
}

const ListSection: React.FC<ListSectionProps> = ({ items }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100 shadow-sm hover:border-blue-100 transition-colors"
                >
                    <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={20} />
                    <div>
                        <h4 className="font-semibold text-slate-900">{item.title}</h4>
                        {item.description && <p className="text-sm text-slate-600 mt-1">{item.description}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListSection;
