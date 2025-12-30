import { Experience } from '@/types/content';
import Link from 'next/link';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TechBadge } from '@/components/common/TechBadge';
import { CircleCheckBig, MapPin } from 'lucide-react';

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card className="w-full border-none shadow-none mb-4 bg-background/50 backdrop-blur-m px-0 py-4">
      <CardHeader className="flex items-center gap-4 px-0">
        <Avatar className="size-12 self-start">
          <AvatarImage src={experience.companyLogo} alt={experience.company} />
          <AvatarFallback>
            {experience.company
              .split(' ')
              .map((word) => word.charAt(0))
              .join('')
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="w-full space-y-2">
          <CardTitle className="leading-none">
            {experience.role} at {experience.company}
          </CardTitle>
          <CardDescription>
            <div className="space-y-0.5 text-xs">
              <div>{experience.duration}</div>
              <div className="flex items-center gap-2">
                <MapPin size={12} />
                {experience.location}
              </div>
            </div>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="text-sm px-0">
        <ul className="space-y-1">
          {experience.responsibilities.map((item, idx) => (
            <li key={idx}>
              <CircleCheckBig
                className="inline mr-2 mb-1 text-muted-foreground"
                size={12}
              />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-wrap px-0">
        {experience.techStack.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </CardFooter>
    </Card>
  );
}
