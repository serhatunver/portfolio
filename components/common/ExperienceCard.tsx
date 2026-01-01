import type { Experience } from '@/types/content';
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
import { Badge } from '@/components/ui/badge';
import { CircleCheckBig, MapPin, Calendar, Dot } from 'lucide-react';

import { formatDuration } from '@/lib/utils/date';

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card className="w-full border-none shadow-none bg-background gap-4 py-4">
      <CardHeader className="flex items-center gap-4 px-0">
        <Avatar className="size-12 self-start border-2">
          <AvatarImage src={experience.companyLogo} alt={experience.company} />
          <AvatarFallback>
            {experience.company
              .split(' ')
              .map((word) => word.charAt(0))
              .join('')
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-between w-full space-y-2">
          <CardTitle className="tracking-tight">
            {experience.role} @{experience.company}
          </CardTitle>
          <CardDescription className="flex h-6 flex-wrap gap-3">
            <Badge
              variant="outline"
              className="bg-muted"
              // className="bg-[#00DC82]/10 border-[#00DC82]/50"
            >
              <MapPin size={12} />
              {experience.location}
            </Badge>
            <Badge
              variant="outline"
              className="bg-muted"
              // className="bg-[#00DC82]/10 border-[#00DC82]/50"
            >
              <Calendar size={12} />
              {formatDuration(experience.startDate, experience.endDate)}
            </Badge>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="text-sm px-0">
        <ul className="space-y-1">
          {experience.highlights.map((item, idx) => (
            <li key={idx}>
              <CircleCheckBig
                className="inline mr-2 mb-1 text-muted-foreground"
                size={14}
              />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-wrap px-0 gap-2">
        {experience.techStack.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </CardFooter>
    </Card>
  );
}
