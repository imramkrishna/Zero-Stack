import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export const LoginPage = () => {
  const [email, setEmail] = useState('email@example.com');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-nexus-dark-bg px-4 relative overflow-hidden">
      {/* Background decoration with exact design from image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative diagonal lines - matching the image */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A9EFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#4A9EFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#4A9EFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Diagonal lines across the page */}
          <line x1="0" y1="30%" x2="100%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1.5" />
          <line x1="0" y1="50%" x2="100%" y2="55%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.6" />
          <line x1="0" y1="70%" x2="100%" y2="65%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />
          {/* Connecting lines around the card area */}
          <path d="M 20% 20% L 80% 30%" stroke="#4A9EFF" strokeWidth="1" opacity="0.3" fill="none" />
          <path d="M 15% 80% L 85% 70%" stroke="#4A9EFF" strokeWidth="1" opacity="0.25" fill="none" />
        </svg>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      {/* Login Form Card */}
      <div className="relative w-full max-w-md z-10">
        <div className="card p-8 shadow-2xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-100 mb-2">
              N<span className="text-[#4A9EFF]">EX</span>US
            </h1>
            <h2 className="text-xl font-semibold text-slate-100 mb-2">Sign In</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="input"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="input pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 bg-slate-800 border-slate-700 rounded text-nexus-blue focus:ring-nexus-blue focus:ring-offset-slate-900"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-slate-300">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-primary w-full">
              Sign In
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center text-sm">
            <p className="text-slate-400">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#4A9EFF] hover:text-[#3B8FEF] font-medium">
                Sign Up
              </Link>
            </p>
            <Link to="/forgot-password" className="block mt-2 text-slate-400 hover:text-slate-300">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
