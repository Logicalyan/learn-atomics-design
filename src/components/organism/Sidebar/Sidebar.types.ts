import type { ReactNode } from "react";

export interface NavItem {
    id: string;
    label: string;
    icon: ReactNode;
    href: string;
}

export interface SidebarProps {
    items: NavItem[];
    collapsed?: boolean;
}