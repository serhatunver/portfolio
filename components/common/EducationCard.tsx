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
    <Card className="w-full border-none shadow-none rounded-2xl bg-background gap-4 py-4">
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
          <span className=" text-sm text-muted-foreground font-normal">
            {education.degree} &bull; {education.department}
          </span>
          <CardDescription>
            {/* {education.degree} &bull; {education.department} */}
          </CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex h-6 flex-wrap gap-3 px-0">
        <Badge
          variant="outline"
          // className="bg-[#FFFC00]/15 border-[#FFFC00]/90 leading-none"
          className="bg-muted"
        >
          <GraduationCap />
          <span>GPA: {education.gpa}</span>
        </Badge>
        <Badge
          variant="outline"
          // className="bg-[#00DC82]/10 border-[#00DC82]/50 leading-none"
          className="bg-muted"
        >
          <Calendar />
          <span>{formatDuration(education.startDate, education.endDate)}</span>
        </Badge>
        <Badge
          variant="outline"
          // className="bg-[#00DC82]/10 border-[#00DC82]/50"
          className="bg-muted"
        >
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
