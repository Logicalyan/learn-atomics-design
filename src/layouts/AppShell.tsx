import React, { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';

import { Home, Settings } from 'lucide-react';
import MobileNavbar from '@/components/organism/MobileNavbar/MobileNavbar';
import Sidebar from '@/components/organism/Sidebar/Sidebar';

export default function AppShell({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);   // desktop only
    const [mobileOpen, setMobileOpen] = useState(false); // mobile drawer

    const items = [
        { id: 1, label: 'Home', icon: <Home />, to: '/' },
        { id: 2, label: 'Settings', icon: <Settings />, to: '/settings' },
    ];

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
    }, [mobileOpen]);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Mobile top bar */}
            <MobileNavbar onHamburger={() => setMobileOpen(prev => !prev)} />

            {/* Sidebar */}
            <Sidebar
                items={items}
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
                    'transition-[margin] duration-300 relative z-0',
                    'pt-14 md:pt-0',                    // space for mobile navbar
                    collapsed ? 'md:ml-20' : 'md:ml-64' // only desktop
                )}
            >
                {children}
            </main>
        </div>
    );
}
