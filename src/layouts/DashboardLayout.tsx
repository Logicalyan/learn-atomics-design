import { BoxIcon, Home, TablePropertiesIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Sidebar from "../components/organism/Sidebar/Sidebar";
import MobileNavbar from "../components/organism/MobileNavbar/MobileNavbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { id: 1, label: 'Dashboard', icon: <Home />, to: '/dashboard' },
    { id: 2, label: 'Table', icon: <TablePropertiesIcon />, to: '/tables' },
    { id: 3, label: 'Button', icon: <BoxIcon />, to: '/buttons' },
    { id: 4, label: 'Form', icon: <BoxIcon />, to: '/forms' },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Mobile top navbar */}
      <MobileNavbar onHamburger={() => setMobileOpen(prev => !prev)} />

      {/* Sidebar */}
      <Sidebar
        items={menuItems}
        collapsed={collapsed}
        onToggle={() => setCollapsed((v) => !v)}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((v) => !v)}
      />

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main content */}
      <main
        className={cn(
          "transition-[margin] duration-300",
          "pt-14 md:pt-8 p-8",                    // mobile has top padding for navbar
          collapsed ? "md:ml-20" : "md:ml-64" // desktop margin shift
        )}
      >
        {children}
      </main>
    </div>
  );
}
