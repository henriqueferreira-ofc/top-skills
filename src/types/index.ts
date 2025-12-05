import { LucideIcon } from 'lucide-react';

export interface SectionItem {
    title?: string;
    description?: string;
    icon?: LucideIcon;
    list?: string[];
}

export interface Section {
    title: string;
    type: 'text' | 'list' | 'cards' | 'steps' | 'process' | 'tools';
    content?: string;
    items?: SectionItem[];
}

export interface Skill {
    id: string;
    title: string;
    shortDescription: string;
    fullDefinition: string;
    icon: LucideIcon;
    color: string;
    sections: Section[];
}

export type ViewState = 'home' | 'detail';
