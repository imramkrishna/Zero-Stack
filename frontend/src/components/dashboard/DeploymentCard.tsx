import type { Deployment } from '@/types';
import { DeploymentStatusBadge } from './DeploymentStatusBadge';
import { GitBranch, GitCommit, ExternalLink, Clock } from 'lucide-react';
import { formatDistanceToNow } from '@/utils/dateUtils';

interface DeploymentCardProps {
  deployment: Deployment;
}

export const DeploymentCard = ({ deployment }: DeploymentCardProps) => {
  const formatBuildTime = (seconds: number) => {
    if (seconds === 0) return '-';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return minutes > 0
      ? `${minutes}m ${remainingSeconds}s`
      : `${remainingSeconds}s`;
  };

  return (
    <div className="card p-6 hover:border-[#4A9EFF]/50 transition-all group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-slate-100">
              {deployment.projectName}
            </h3>
            <DeploymentStatusBadge status={deployment.status} size="sm" />
          </div>
          
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1">
              <GitBranch className="w-4 h-4" />
              {deployment.branch}
            </span>
            <span className="flex items-center gap-1">
              <GitCommit className="w-4 h-4" />
              {deployment.commitHash}
            </span>
          </div>
        </div>

        {deployment.url && deployment.status === 'success' && (
          <a
            href={deployment.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-[#4A9EFF] transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* Commit Message */}
      <p className="text-slate-300 text-sm mb-4 line-clamp-2">
        {deployment.commitMessage}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-slate-400 pt-4 border-t border-slate-700/50">
        <div className="flex items-center gap-4">
          <span>by {deployment.author}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {formatBuildTime(deployment.buildTime)}
          </span>
        </div>
        <span className="text-xs">
          {formatDistanceToNow(deployment.createdAt)}
        </span>
      </div>

      {/* Environment Badge */}
      <div className="mt-3">
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
          deployment.environment === 'production'
            ? 'bg-purple-500/10 text-purple-400'
            : deployment.environment === 'preview'
            ? 'bg-blue-500/10 text-blue-400'
            : 'bg-slate-500/10 text-slate-400'
        }`}>
          {deployment.environment}
        </span>
      </div>
    </div>
  );
};
