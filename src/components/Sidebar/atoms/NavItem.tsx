// components/atoms/NavItem/NavItem.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavItemProps {
  label: string;
  icon?: React.ReactNode;
  to: string;
}

export const NavItem: React.FC<NavItemProps> = ({ label, icon, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-200 transition ${
          isActive ? 'bg-gray-300 font-bold' : ''
        }`
      }
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{label}</span>
    </NavLink>
  );
};
