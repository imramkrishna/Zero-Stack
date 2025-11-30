import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export const RegistrationPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // Handle registration logic here
    console.log('Register:', { fullName, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-nexus-dark-bg px-4 relative overflow-hidden">
      {/* Background decoration with exact design from image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative diagonal lines - matching the image */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="regLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A9EFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#4A9EFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#4A9EFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Diagonal lines across the page */}
          <line x1="0" y1="30%" x2="100%" y2="40%" stroke="url(#regLineGradient)" strokeWidth="1.5" />
          <line x1="0" y1="50%" x2="100%" y2="55%" stroke="url(#regLineGradient)" strokeWidth="1" opacity="0.6" />
          <line x1="0" y1="70%" x2="100%" y2="65%" stroke="url(#regLineGradient)" strokeWidth="1" opacity="0.4" />
          {/* Connecting lines around the card area */}
          <path d="M 20% 20% L 80% 30%" stroke="#4A9EFF" strokeWidth="1" opacity="0.3" fill="none" />
          <path d="M 15% 80% L 85% 70%" stroke="#4A9EFF" strokeWidth="1" opacity="0.25" fill="none" />
        </svg>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        {/* Decorative star - matching the image */}
        <div className="absolute bottom-16 right-16 text-[#2A2A3C] opacity-60">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 0 L65 55 L120 60 L65 65 L60 120 L55 65 L0 60 L55 55 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Registration Form Card */}
      <div className="relative w-full max-w-md z-10">
        <div className="card p-8 shadow-2xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-100 mb-2">
              N<span className="text-[#4A9EFF]">EX</span>US
            </h1>
            <h2 className="text-xl font-semibold text-slate-100 mb-2">Create Account</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-2">
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="input"
                required
              />
            </div>

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
                placeholder="angular@gmail.com"
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

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                Confirm password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="input pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-primary w-full">
              Sign Up
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center text-sm">
            <p className="text-slate-400">
              Already have an account?{' '}
              <Link to="/login" className="text-[#4A9EFF] hover:text-[#3B8FEF] font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
