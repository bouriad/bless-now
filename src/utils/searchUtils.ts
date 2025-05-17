
import { Church } from '@/data/mockChurches';
import { Project } from '@/data/mockProjects';

// Helper function to check if a string includes a search term (case insensitive)
const matchesSearch = (text: string | undefined, term: string): boolean => {
  if (!text) return false;
  return text.toLowerCase().includes(term.toLowerCase());
};

// Search churches based on search term
export const searchChurches = (churches: Church[], searchTerm: string): Church[] => {
  if (!searchTerm.trim()) return churches;
  
  return churches.filter(church => 
    matchesSearch(church.name, searchTerm) ||
    matchesSearch(church.city, searchTerm) ||
    matchesSearch(church.country, searchTerm) ||
    matchesSearch(church.denomination, searchTerm) ||
    matchesSearch(church.description, searchTerm)
  );
};

// Search projects based on search term
export const searchProjects = (projects: Project[], searchTerm: string): Project[] => {
  if (!searchTerm.trim()) return projects;
  
  return projects.filter(project => 
    matchesSearch(project.title, searchTerm) ||
    matchesSearch(project.location, searchTerm) ||
    matchesSearch(project.category, searchTerm) ||
    matchesSearch(project.summary, searchTerm) // Changed from 'description' to 'summary'
  );
};
