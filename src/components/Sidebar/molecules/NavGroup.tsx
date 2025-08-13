// components/molecules/NavGroup/NavGroup.tsx
import React from 'react';
import { NavItem, type NavItemProps } from '../atoms/NavItem';

export interface NavGroupProps {
  title: string;
  items: NavItemProps[];
}

export const NavGroup: React.FC<NavGroupProps> = ({ title, items }) => {
  return (
    <div>
      <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">{title}</h3>
      <div className="flex flex-col gap-1">
        {items.map((item, idx) => (
          <NavItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};
