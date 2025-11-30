import type { DeploymentStatus } from '@/types';
import { CheckCircle2, Clock, XCircle, Loader2 } from 'lucide-react';

interface DeploymentStatusBadgeProps {
  status: DeploymentStatus;
  size?: 'sm' | 'md';
}

export const DeploymentStatusBadge = ({ status, size = 'md' }: DeploymentStatusBadgeProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'success':
        return {
          label: 'Success',
          icon: CheckCircle2,
          className: 'bg-green-500/10 text-green-400 border-green-500/20',
        };
      case 'building':
        return {
          label: 'Building',
          icon: Loader2,
          className: 'bg-blue-500/10 text-blue-400 border-blue-500/20 animate-pulse',
          iconClassName: 'animate-spin',
        };
      case 'error':
        return {
          label: 'Failed',
          icon: XCircle,
          className: 'bg-red-500/10 text-red-400 border-red-500/20',
        };
      case 'queued':
        return {
          label: 'Queued',
          icon: Clock,
          className: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
        };
      default:
        return {
          label: 'Unknown',
          icon: Clock,
          className: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;
  const iconSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';
  const padding = size === 'sm' ? 'px-2 py-1' : 'px-3 py-1.5';

  return (
    <span
      className={`inline-flex items-center gap-1.5 ${padding} border rounded-full font-medium ${textSize} ${config.className}`}
    >
      <Icon className={`${iconSize} ${config.iconClassName || ''}`} />
      {config.label}
    </span>
  );
};
