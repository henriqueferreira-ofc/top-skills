import React from 'react';

interface TextSectionProps {
    content: string;
}

const TextSection: React.FC<TextSectionProps> = ({ content }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-lg text-slate-700 leading-relaxed">
            {content}
        </div>
    );
};

export default TextSection;
