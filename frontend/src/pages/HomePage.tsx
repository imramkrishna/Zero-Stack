import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-nexus-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="home-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgb(71, 85, 105)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#home-grid)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-100">
              N<span className="text-nexus-blue">EX</span>US
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/docs" className="text-slate-300 hover:text-slate-100 transition-colors">
              Docs
            </Link>
            <Link to="/about" className="text-slate-300 hover:text-slate-100 transition-colors">
              About
            </Link>
            <Link to="/login" className="btn-secondary">
              Sign In
            </Link>
            <Link to="/register" className="btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-slate-100 mb-6">
          Deploy with
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-nexus-blue to-purple-500">
            Confidence
          </span>
        </h1>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          The modern deployment platform for developers. Ship faster with automated
          deployments, real-time monitoring, and seamless collaboration.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/register" className="btn-primary text-lg px-8 py-3">
            Start Deploying
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </Link>
          <Link to="/deployments" className="btn-secondary text-lg px-8 py-3">
            View Demo
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
          <div className="card p-8 text-left">
            <div className="w-12 h-12 bg-nexus-blue/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-nexus-blue" />
            </div>
            <h3 className="text-xl font-semibold text-slate-100 mb-3">Lightning Fast</h3>
            <p className="text-slate-400">
              Deploy in seconds with our optimized build pipeline and global CDN distribution.
            </p>
          </div>
          <div className="card p-8 text-left">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-100 mb-3">Secure by Default</h3>
            <p className="text-slate-400">
              Enterprise-grade security with automatic SSL, DDoS protection, and encrypted connections.
            </p>
          </div>
          <div className="card p-8 text-left">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-100 mb-3">Global Scale</h3>
            <p className="text-slate-400">
              Reach users worldwide with our edge network spanning 100+ locations globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
