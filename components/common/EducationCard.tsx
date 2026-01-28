import { Calendar, CircleCheckBig, GraduationCap, MapPin } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { urlFor } from '@/lib/cms/image';
import { formatDuration } from '@/lib/utils/date';
import type { EducationType } from '@/types/content';

export function EducationCard({ education }: { education: EducationType }) {
  return (
    <Card className="w-full gap-4 border-none py-4">
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
          <div className="group/slide flex">
            <div className="hover-slide">{education.institution}</div>
          </div>
          <CardDescription className="group/slide font-normal">
            <div className="hover-slide">
              {education.degree} &bull; {education.department}
            </div>
          </CardDescription>
        </CardTitle>
      </CardHeader>
      {(education.gpa || education.location || education.startDate) && (
        <CardContent className="flex flex-wrap gap-2 px-0">
          {education.gpa && (
            <Badge variant="outline" className="bg-muted">
              <GraduationCap />
              <span>GPA: {education.gpa}</span>
            </Badge>
          )}
          {education.location && (
            <Badge variant="outline" className="bg-muted">
              <MapPin />
              <span>{education.location}</span>
            </Badge>
          )}
          {education.startDate && (
            <Badge variant="outline" className="bg-muted">
              <Calendar />
              <span>{formatDuration(education.startDate, education.endDate)}</span>
            </Badge>
          )}
        </CardContent>
      )}
      <CardFooter className="px-0 text-sm">
        <ul className="space-y-1">
          {education.highlights.map((highlight, idx) => (
            <li key={idx} className="group/slide">
              <div className="hover-slide">
                <CircleCheckBig className="text-muted-foreground mr-2 mb-1 inline" size={14} />
                {highlight}
              </div>
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
}
