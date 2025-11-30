export type DeploymentStatus = 'success' | 'building' | 'error' | 'queued';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'developer' | 'viewer';
}

export interface Project {
  id: string;
  name: string;
  repository: string;
  framework: string;
  createdAt: string;
  updatedAt: string;
  description?: string;
}

export interface Deployment {
  id: string;
  projectId: string;
  projectName: string;
  status: DeploymentStatus;
  branch: string;
  commitHash: string;
  commitMessage: string;
  author: string;
  buildTime: number; // in seconds
  url?: string;
  createdAt: string;
  startedAt?: string;
  completedAt?: string;
  environment: 'production' | 'preview' | 'development';
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
  children?: NavItem[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
}
