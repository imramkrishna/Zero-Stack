import { Link } from 'react-router-dom';
import { Search, User, Bell, Settings } from 'lucide-react';
import { useState } from 'react';

export const TopHeader = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-nexus-card-bg/80 backdrop-blur-md border-b border-nexus-card-border">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side - Logo (mobile) and Navigation */}
        <div className="flex items-center gap-8">
          <Link to="/" className="lg:hidden flex items-center gap-2">
            <span className="text-xl font-bold text-slate-100">
              N<span className="text-[#4A9EFF]">EX</span>US
            </span>
          </Link>

          {/* Main Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/deployments"
              className="text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors"
            >
              Deployments
            </Link>
            <Link
              to="/analytics"
              className="text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors"
            >
              Analytics
            </Link>
            <Link
              to="/edge-functions"
              className="text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors"
            >
              Edge Functions
            </Link>
          </nav>
        </div>

        {/* Right side - Search and Profile */}
        <div className="flex items-center gap-4">
          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-64 pl-10 pr-4 py-2 bg-[#2A2A3C]/50 border border-[#3A3A4C] text-slate-100 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-[#4A9EFF] focus:border-transparent placeholder:text-slate-500"
            />
          </div>

          {/* Search Icon (Mobile) */}
          <button className="lg:hidden p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-md">
            <Search className="w-5 h-5" />
          </button>

          {/* Notifications */}
          <button className="relative p-2 text-slate-400 hover:text-slate-100 hover:bg-[#2A2A3C] rounded-md">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#4A9EFF] rounded-full"></span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 p-2 text-slate-400 hover:text-slate-100 hover:bg-[#2A2A3C] rounded-md"
            >
              <User className="w-5 h-5" />
            </button>

            {isProfileOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsProfileOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-56 bg-nexus-card-bg border border-nexus-card-border rounded-lg shadow-xl z-20">
                  <div className="p-4 border-b border-nexus-card-border">
                    <p className="text-sm font-medium text-slate-100">John Doe</p>
                    <p className="text-xs text-slate-400">john@example.com</p>
                  </div>
                  <div className="py-2">
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-[#2A2A3C]/50"
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-[#2A2A3C]/50"
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                  </div>
                  <div className="border-t border-nexus-card-border py-2">
                    <button className="w-full px-4 py-2 text-sm text-left text-red-400 hover:text-red-300 hover:bg-[#2A2A3C]/50">
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
