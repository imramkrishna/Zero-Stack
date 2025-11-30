import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  FileText, 
  ChevronRight, 
  ChevronDown,
  Book,
  Layers,
  Code,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItemProps {
  label: string;
  icon?: ReactNode;
  path?: string;
  children?: { label: string; path: string }[];
}

const NavItem = ({ label, icon, path, children }: NavItemProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  if (children) {
    return (
      <div className="mb-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 rounded-md transition-colors"
        >
          <div className="flex items-center gap-2">
            {icon}
            <span className="font-medium">{label}</span>
          </div>
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        {isExpanded && (
          <div className="ml-4 mt-1 space-y-1">
            {children.map((child) => (
              <Link
                key={child.path}
                to={child.path}
                className={`block px-3 py-1.5 text-sm rounded-md transition-colors ${
                  location.pathname === child.path
                    ? 'text-[#4A9EFF] bg-[#4A9EFF]/10'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-[#2A2A3C]/50'
                }`}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={path || '#'}
      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
        location.pathname === path
          ? 'text-[#4A9EFF] bg-[#4A9EFF]/10'
          : 'text-slate-300 hover:text-slate-100 hover:bg-[#2A2A3C]/50'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export const SidebarNavigation = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen
          w-72 bg-nexus-card-bg/50 border-r border-nexus-card-border
          backdrop-blur-sm z-50 overflow-y-auto
          transition-transform duration-300 lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-slate-100">
                N<span className="text-[#4A9EFF]">EX</span>US
              </span>
            </Link>
            <button
              onClick={onClose}
              className="lg:hidden text-slate-400 hover:text-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-[#2A2A3C]/50 border border-[#3A3A4C] text-slate-100 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-[#4A9EFF] focus:border-transparent placeholder:text-slate-500"
            />
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <div className="mb-6">
              <h3 className="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Getting Started
              </h3>
              <NavItem
                label="Introduction"
                icon={<FileText className="w-4 h-4" />}
                path="/docs"
              />
            </div>

            <div className="mb-6">
              <h3 className="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                API Reference
              </h3>
              <NavItem
                label="API Reference"
                icon={<Book className="w-4 h-4" />}
                children={[
                  { label: 'Authentication', path: '/docs/api/auth' },
                  { label: 'Deployments', path: '/docs/api/deployments' },
                  { label: 'Projects', path: '/docs/api/projects' },
                ]}
              />
            </div>

            <div className="mb-6">
              <h3 className="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Resources
              </h3>
              <NavItem
                label="Guides"
                icon={<Layers className="w-4 h-4" />}
                children={[
                  { label: 'Quick Start', path: '/docs/guides/quickstart' },
                  { label: 'Deployment', path: '/docs/guides/deployment' },
                  { label: 'Environment Variables', path: '/docs/guides/env' },
                ]}
              />
              <NavItem
                label="SDKs"
                icon={<Code className="w-4 h-4" />}
                children={[
                  { label: 'JavaScript', path: '/docs/sdk/javascript' },
                  { label: 'Python', path: '/docs/sdk/python' },
                  { label: 'Go', path: '/docs/sdk/go' },
                ]}
              />
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export const MobileMenuButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-md"
    >
      <Menu className="w-6 h-6" />
    </button>
  );
};
