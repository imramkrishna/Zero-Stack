import { useState, useMemo } from 'react';
import { MainLayout } from '@layouts/MainLayout';
import { Breadcrumbs } from '@components/layout/Breadcrumbs';
import { DeploymentCard } from '@components/dashboard/DeploymentCard';
import { SearchBar } from '@components/dashboard/SearchBar';
import { FilterDropdown } from '@components/dashboard/FilterDropdown';
import { deployments } from '@data/mockData';

export const DeploymentsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [environmentFilter, setEnvironmentFilter] = useState<string>('all');

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'success', label: 'Success' },
    { value: 'building', label: 'Building' },
    { value: 'error', label: 'Failed' },
    { value: 'queued', label: 'Queued' },
  ];

  const environmentOptions = [
    { value: 'all', label: 'All Environments' },
    { value: 'production', label: 'Production' },
    { value: 'preview', label: 'Preview' },
    { value: 'development', label: 'Development' },
  ];

  const filteredDeployments = useMemo(() => {
    return deployments.filter((deployment) => {
      // Search filter
      const matchesSearch =
        deployment.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deployment.commitMessage.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deployment.branch.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deployment.author.toLowerCase().includes(searchQuery.toLowerCase());

      // Status filter
      const matchesStatus =
        statusFilter === 'all' || deployment.status === statusFilter;

      // Environment filter
      const matchesEnvironment =
        environmentFilter === 'all' || deployment.environment === environmentFilter;

      return matchesSearch && matchesStatus && matchesEnvironment;
    });
  }, [searchQuery, statusFilter, environmentFilter]);

  return (
    <MainLayout showSidebar={false}>
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <Breadcrumbs />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-100 mb-2">Deployments</h1>
          <p className="text-slate-400">
            Monitor and manage all your deployments across projects
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search deployments..."
          />
          <div className="flex gap-3">
            <FilterDropdown
              label="Status"
              options={statusOptions}
              value={statusFilter}
              onChange={setStatusFilter}
            />
            <FilterDropdown
              label="Environment"
              options={environmentOptions}
              value={environmentFilter}
              onChange={setEnvironmentFilter}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="card p-4">
            <p className="text-slate-400 text-sm mb-1">Total Deployments</p>
            <p className="text-2xl font-bold text-slate-100">{deployments.length}</p>
          </div>
          <div className="card p-4">
            <p className="text-slate-400 text-sm mb-1">Successful</p>
            <p className="text-2xl font-bold text-green-400">
              {deployments.filter(d => d.status === 'success').length}
            </p>
          </div>
          <div className="card p-4">
            <p className="text-slate-400 text-sm mb-1">Building</p>
            <p className="text-2xl font-bold text-blue-400">
              {deployments.filter(d => d.status === 'building').length}
            </p>
          </div>
          <div className="card p-4">
            <p className="text-slate-400 text-sm mb-1">Failed</p>
            <p className="text-2xl font-bold text-red-400">
              {deployments.filter(d => d.status === 'error').length}
            </p>
          </div>
        </div>

        {/* Deployments Grid */}
        {filteredDeployments.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredDeployments.map((deployment) => (
              <DeploymentCard key={deployment.id} deployment={deployment} />
            ))}
          </div>
        ) : (
          <div className="card p-12 text-center">
            <p className="text-slate-400 text-lg">No deployments found</p>
            <p className="text-slate-500 text-sm mt-2">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};
