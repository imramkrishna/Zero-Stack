import { MainLayout } from '@layouts/MainLayout';
import { Breadcrumbs } from '@components/layout/Breadcrumbs';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeExample = `import Nexus from "Nexus";
import { NextApiRequest } from "NextApiRequest";

<script>
  const response = await fetch("https://nexus.com/apiv1/message" />
</script>

</script>`;

export const DocsPage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <MainLayout showSidebar={true}>
      <div className="container mx-auto px-6 py-8 max-w-5xl relative">
        {/* Decorative lines in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <svg className="absolute top-0 right-0 w-full h-64" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="50" x2="100%" y2="100" stroke="#4A9EFF" strokeWidth="1" opacity="0.3" />
            <line x1="0" y1="120" x2="100%" y2="80" stroke="#4A9EFF" strokeWidth="1" opacity="0.2" />
          </svg>
        </div>
        <Breadcrumbs />

        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-slate-100 mb-4">Introduction to Nexus</h1>
            <p className="text-slate-400 leading-relaxed">
              Nexus is a developer platform introduction nexus@amail react<span className="text-nexus-blue">js</span> developer and jsamaxc team evolution and properties that
              definitionrocketing open@primemant framezilxia option apis<span className="text-nexus-blue">css</span> parameter act implement images naturals avect
              occ@entre and inducaxale learn avisa définlamaskae enterprise in quirintentade are node.net actua siclipse se commodo
              denominationphobic.
            </p>
          </div>

          {/* Description */}
          <div>
            <p className="text-slate-400 leading-relaxed">
              Here is a sample starter vale for nexus instatialisation, meleixase introduction to Nexus.
            </p>
          </div>

          {/* Code Block */}
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-400">code</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-300 hover:text-slate-100 bg-slate-800/50 hover:bg-slate-800 rounded-md transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            
            <div className="rounded-lg overflow-hidden border border-[#2A2A3C]">
              <SyntaxHighlighter
                language="javascript"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: '1.5rem',
                  background: '#1A1A24',
                  fontSize: '0.875rem',
                }}
              >
                {codeExample}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
