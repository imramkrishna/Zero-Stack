import { ReactNode, useState } from 'react';
import { SidebarNavigation, MobileMenuButton } from '@components/layout/SidebarNavigation';
import { TopHeader } from '@components/layout/TopHeader';

interface MainLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export const MainLayout = ({ children, showSidebar = true }: MainLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-nexus-dark-bg">
      {/* Background decoration with geometric lines */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        {/* Decorative diagonal lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bgLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A9EFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#4A9EFF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#4A9EFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="20%" x2="100%" y2="25%" stroke="url(#bgLineGradient)" strokeWidth="1" />
          <line x1="0" y1="50%" x2="100%" y2="48%" stroke="url(#bgLineGradient)" strokeWidth="1" opacity="0.8" />
          <line x1="0" y1="75%" x2="100%" y2="73%" stroke="url(#bgLineGradient)" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>

      <div className="relative flex">
        {/* Sidebar */}
        {showSidebar && (
          <SidebarNavigation
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Top Header */}
          <div className="flex items-center gap-4 px-6 py-4 bg-nexus-card-bg/80 backdrop-blur-md border-b border-nexus-card-border">
            {showSidebar && <MobileMenuButton onClick={() => setIsSidebarOpen(true)} />}
            <div className="flex-1">
              <TopHeader />
            </div>
          </div>

          {/* Page Content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
