import { MainLayout } from '@layouts/MainLayout';
import { Breadcrumbs } from '@components/layout/Breadcrumbs';
import { teamMembers } from '@data/mockData';
import { User } from 'lucide-react';

export const AboutPage = () => {
  return (
    <MainLayout showSidebar={false}>
      <div className="container mx-auto px-6 py-8 max-w-6xl relative">
        {/* Decorative lines in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <svg className="absolute top-0 right-0 w-full h-96" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="100" x2="100%" y2="150" stroke="#4A9EFF" strokeWidth="1" opacity="0.3" />
            <line x1="0" y1="200" x2="100%" y2="120" stroke="#4A9EFF" strokeWidth="1" opacity="0.2" />
            <line x1="20%" y1="300" x2="80%" y2="250" stroke="#4A9EFF" strokeWidth="1" opacity="0.25" />
          </svg>
        </div>
        <Breadcrumbs />

        <div className="space-y-16">
          {/* Our Mission Section */}
          <section>
            <h1 className="text-4xl font-bold text-slate-100 mb-6">Our Mission</h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
              Lorem, ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc ullamco laboris aliquip ex ea commodo
              consequat ullamco laboris nisi, ut aliqua ex ea commodo exerc ullamco laboris nisi, ut aliqua ex ea commodo consequat.
            </p>
          </section>

          {/* Meet the Team Section */}
          <section>
            <h2 className="text-3xl font-bold text-slate-100 mb-8">Meet the Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div key={member.id} className="card p-6 hover:border-[#4A9EFF]/50 transition-all">
                  {/* Avatar */}
                  <div className="bg-gradient-to-br from-[#2A2A3C] to-[#1A1A24] rounded-lg aspect-video flex items-center justify-center mb-4 border border-[#3A3A4C]">
                    <User className="w-16 h-16 text-slate-600" />
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-lg font-semibold text-slate-100 mb-1">
                    {member.name}
                  </h3>
                  
                  {/* Role */}
                  {member.role && (
                    <p className="text-sm text-slate-400 mb-2">{member.role}</p>
                  )}
                  
                  {/* Bio */}
                  {member.bio && (
                    <p className="text-sm text-slate-500 mt-3">{member.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};
