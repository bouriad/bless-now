
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'building', name: 'Building & Construction' },
  { id: 'education', name: 'Education & Schools' },
  { id: 'community', name: 'Community Outreach' },
  { id: 'missions', name: 'Mission Work' },
  { id: 'worship', name: 'Worship & Music' },
  { id: 'youth', name: 'Youth Ministry' },
  { id: 'disaster', name: 'Disaster Relief' }
];

const urgencies = [
  { id: 'all', name: 'All Urgencies' },
  { id: 'urgent', name: 'Urgent (< 10 days)' },
  { id: 'high', name: 'High Priority' },
  { id: 'medium', name: 'Medium Priority' },
  { id: 'low', name: 'Low Priority' }
];

const sortOptions = [
  { id: 'newest', name: 'Newest' },
  { id: 'endingSoon', name: 'Ending Soon' },
  { id: 'mostFunded', name: 'Most Funded' },
  { id: 'leastFunded', name: 'Least Funded' }
];

interface ProjectFiltersProps {
  onFilterChange?: (filters: any) => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedUrgency, setSelectedUrgency] = useState('all');
  const [selectedSort, setSelectedSort] = useState('newest');

  const handleFilterChange = () => {
    if (onFilterChange) {
      onFilterChange({
        category: selectedCategory,
        urgency: selectedUrgency,
        sort: selectedSort
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-montserrat font-semibold">Find Projects</h2>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Filter size={16} className="mr-2" />
          Filters
        </Button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:block space-y-4`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Category</label>
            <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Priority</label>
            <Select value={selectedUrgency} onValueChange={(value) => setSelectedUrgency(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select urgency" />
              </SelectTrigger>
              <SelectContent>
                {urgencies.map((urgency) => (
                  <SelectItem key={urgency.id} value={urgency.id}>
                    {urgency.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Sort By</label>
            <Select value={selectedSort} onValueChange={(value) => setSelectedSort(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.id} value={option.id}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="w-full md:w-2/3">
            <input
              type="text"
              placeholder="Search by church name or location..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <Button 
            className="bg-faith-green-500 hover:bg-faith-green-600"
            onClick={handleFilterChange}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;
