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

export function EducationCard({ education }: { education: Education }) {
  return (
    <Card className="w-full bg-background mb-2">
      <CardHeader className="flex items-center gap-4">
        <Avatar className="size-12">
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
        <CardTitle className="flex flex-col text-base">
          <span className="text-base">{education.institution}</span>
          {/* <span className=" text-sm text-muted-foreground font-normal"></span> */}
          <CardDescription>{education.degree}</CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-1">
        <Badge size="sm" variant="secondary">
          {/* <Calendar /> */}
          {education.duration}
        </Badge>
        {/* &#8226; */}
        <Badge size="sm" variant="secondary">
          <MapPin />
          {education.location}
        </Badge>
        {/* &#8226; */}
        <Badge size="sm" variant="secondary">
          {/* <GraduationCap /> */}
          GPA: {education.gpa}
        </Badge>
      </CardContent>
      {/* <CardFooter className="">
            <p className="text-sm">{education.details}</p>
          </CardFooter> */}
    </Card>
  );
}
