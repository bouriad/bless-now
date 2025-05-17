
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
        <div className="absolute top-0 right-0 bg-sky text-white px-3 py-1 text-xs font-public rounded-bl-md">
          {category}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-2 px-3">
          <div className="flex items-center text-white">
            <MapPin size={14} className="mr-1" />
            <span className="text-xs font-public">{location}</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="p-4 pb-2">
        <div className="text-xs text-navy/70 mb-1 font-public">{churchName}</div>
        <h3 className="font-playfair font-semibold text-lg line-clamp-1 text-navy">{title}</h3>
      </CardHeader>
      
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-sm text-navy/70 line-clamp-2 mb-4 font-public">{summary}</p>
        
        <div className="progress-bar mb-2">
          <div 
            className="progress-fill bg-sky" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-xs text-navy/70 font-public">
          <span><span className="font-semibold text-sky">${currentAmount.toLocaleString()}</span> raised</span>
          <span className="font-medium">{daysLeft > 0 ? `${daysLeft} days left` : 'Ending soon'}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-gold hover:bg-gold/90 font-public">
          Support This Church
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
