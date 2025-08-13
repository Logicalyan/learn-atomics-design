import React, { useState } from "react";
import { BarChart } from "lucide-react";
import { Sidebar } from "../Sidebar/organism/Sidebar";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-64">
        {/* Top navbar */}
        <header className="flex items-center justify-between bg-white shadow p-4 md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <BarChart size={20} />
          </button>
          <span className="font-bold">My App</span>
        </header>

        {/* Page content */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};
