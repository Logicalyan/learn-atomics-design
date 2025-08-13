import React from 'react';
import Icon from '@/components/atoms/Icon';
import { Menu } from 'lucide-react';

interface MobileNavbarProps {
  title?: string;
  onHamburger: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ title = 'My Dashboard', onHamburger }) => {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-red-600 text-white h-14">
      <div className="h-full px-4 flex items-center justify-between">
        <span className="font-bold">{title}</span>
        <button
          onClick={onHamburger}
          className="p-2 rounded-md hover:bg-gray-800"
          aria-label="Open menu"
        >
          <Icon size={20}><Menu /></Icon>
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
