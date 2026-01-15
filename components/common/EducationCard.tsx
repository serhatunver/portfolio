import { Calendar, CircleCheckBig, GraduationCap, MapPin } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { urlFor } from '@/lib/cms/image';
import { formatDuration } from '@/lib/utils/date';
import type { EducationType } from '@/types/content';

export function EducationCard({ education }: { education: EducationType }) {
  return (
    <Card className="w-full gap-4 border-none bg-transparent py-4 shadow-none">
      <CardHeader className="flex items-center gap-4 px-0">
        <Avatar className="size-12 border-2">
          {typeof education.institutionLogo === 'string' ? (
            <AvatarImage src={education.institutionLogo} alt={education.institution} />
          ) : (
            <AvatarImage src={urlFor(education.institutionLogo).url()} alt={education.institution} />
          )}
          <AvatarFallback>
            {education.institution
              .split(' ')
              .map((word) => word.charAt(0))
              .join('')
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="flex flex-col text-base tracking-tight">
          <span className="hover-slide text-base">{education.institution}</span>
          <CardDescription className="hover-slide font-normal">
            {education.degree} &bull; {education.department}
          </CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2 px-0">
        <Badge variant="outline" className="bg-muted">
          <GraduationCap />
          <span>GPA: {education.gpa}</span>
        </Badge>
        <Badge variant="outline" className="bg-muted">
          <Calendar />
          <span>{formatDuration(education.startDate, education.endDate)}</span>
        </Badge>
        <Badge variant="outline" className="bg-muted">
          <MapPin />
          <span>{education.location}</span>
        </Badge>
      </CardContent>
      <CardFooter className="px-0 text-sm">
        <ul className="space-y-1">
          {education.highlights.map((highlight, idx) => (
            <li key={idx} className="hover-slide">
              <CircleCheckBig className="text-muted-foreground mr-2 mb-1 inline" size={14} />
              {highlight}
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
}
