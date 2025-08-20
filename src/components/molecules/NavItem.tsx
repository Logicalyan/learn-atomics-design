import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/atoms/Icon';
import { cn } from '@/utils/cn';

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  to: string;       // was href
  collapsed: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon, to, collapsed, onClick }) => {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 transition-colors',
        active
          ? 'bg-red-600 text-white'
          : 'text-red-400 hover:bg-red-400 hover:text-white',
        collapsed && 'justify-center'
      )}
    >
      <Icon size={20}>{icon}</Icon>
      {!collapsed && <span className="truncate">{label}</span>}
    </Link>
  );
};

export default NavItem;
