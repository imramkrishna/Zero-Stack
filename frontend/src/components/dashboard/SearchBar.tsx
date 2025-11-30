import { Search as SearchIcon } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ 
  value, 
  onChange, 
  placeholder = 'Search deployments...' 
}: SearchBarProps) => {
  return (
    <div className="relative w-full md:w-96">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-4 py-2.5 bg-[#2A2A3C]/50 border border-[#3A3A4C] text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4A9EFF] focus:border-transparent placeholder:text-slate-500"
      />
    </div>
  );
};
