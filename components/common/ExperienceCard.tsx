import { Calendar, CircleCheckBig, MapPin } from 'lucide-react';

import { TechBadge } from '@/components/common/TechBadge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { urlFor } from '@/lib/cms/image';
import { formatDuration } from '@/lib/utils/date';
import type { ExperienceType } from '@/types/content';

export function ExperienceCard({ experience }: { experience: ExperienceType }) {
  return (
    <Card className="w-full gap-4 border-none py-4">
      <CardHeader className="flex items-center gap-4 px-0">
        <Avatar className="size-12 self-start border-2">
          {typeof experience.companyLogo === 'string' ? (
            <AvatarImage src={experience.companyLogo} alt={experience.company} />
          ) : (
            <AvatarImage src={urlFor(experience.companyLogo).url()} alt={experience.company} />
          )}
          <AvatarFallback>
            {experience.company
              .split(' ')
              .map((word) => word.charAt(0))
              .join('')
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex w-full flex-col justify-between space-y-2">
          <CardTitle className="group/slide tracking-tight">
            <div className="hover-slide">
              {experience.role} @{experience.company}
            </div>
          </CardTitle>
          <CardDescription className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-muted">
              <MapPin size={12} />
              {experience.location}
            </Badge>
            <Badge variant="outline" className="bg-muted">
              <Calendar size={12} />
              {formatDuration(experience.startDate, experience.endDate)}
            </Badge>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-0 text-sm">
        <ul className="space-y-1">
          {experience.highlights.map((highlight, idx) => (
            <li key={idx} className="group/slide">
              <div className="hover-slide">
                <CircleCheckBig className="text-muted-foreground mr-2 mb-1 inline" size={14} />
                {highlight}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 px-0">
        {experience.techStack.map((tech) => (
          <TechBadge key={tech.slug} tech={tech} />
        ))}
      </CardFooter>
    </Card>
  );
}
