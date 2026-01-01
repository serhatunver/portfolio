import type { Education } from '@/types/content';
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
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, GraduationCap } from 'lucide-react';
import { formatDuration } from '@/lib/utils/date';

export function EducationCard({ education }: { education: Education }) {
  return (
    <Card className="w-full border-none shadow-none bg-background gap-4 py-4">
      <CardHeader className="flex items-center gap-4 px-0">
        <Avatar className="size-12 border-2">
          <AvatarImage
            src={education.institutionLogo}
            alt={education.institution}
          />
          <AvatarFallback>
            {education.institution
              .split(' ')
              .map((word) => word.charAt(0))
              .join('')
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="flex flex-col text-base tracking-tight">
          <span className="text-base">{education.institution}</span>
          <CardDescription className="font-normal">
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
      <CardFooter className="px-0">
        <p className="text-sm">{education.description}</p>
      </CardFooter>
    </Card>
  );
}
