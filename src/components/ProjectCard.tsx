
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export interface ProjectCardProps {
  id: string;
  churchName: string;
  title: string;
  summary: string;
  image: string;
  location: string;
  currentAmount: number;
  goalAmount: number;
  daysLeft: number;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  churchName,
  title,
  summary,
  image,
  location,
  currentAmount,
  goalAmount,
  daysLeft,
  category,
}) => {
  const progressPercentage = Math.min((currentAmount / goalAmount) * 100, 100);
  
  return (
    <Card className="project-card overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-sky-500 text-white px-3 py-1 text-xs font-medium rounded-bl-md">
          {category}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-2 px-3">
          <div className="flex items-center text-white">
            <MapPin size={14} className="mr-1" />
            <span className="text-xs">{location}</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="p-4 pb-2">
        <div className="text-xs text-gray-500 mb-1">{churchName}</div>
        <h3 className="font-montserrat font-semibold text-lg line-clamp-1">{title}</h3>
      </CardHeader>
      
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{summary}</p>
        
        <div className="progress-bar mb-2">
          <div 
            className="progress-fill bg-faith-green-500" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-xs text-gray-500">
          <span><span className="font-semibold text-faith-green-700">${currentAmount.toLocaleString()}</span> raised</span>
          <span className="font-medium">{daysLeft > 0 ? `${daysLeft} days left` : 'Ending soon'}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-sky-500 hover:bg-sky-600">
          Donate Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
