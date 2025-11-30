import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  const formatLabel = (str: string) => {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-slate-100 transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={to} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-slate-100 font-medium">{formatLabel(value)}</span>
            ) : (
              <Link to={to} className="hover:text-slate-100 transition-colors">
                {formatLabel(value)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};
