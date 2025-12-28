import { Button } from '@/components/ui/button';
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

import { Badge } from '@/components/ui/badge';
import { CircleCheckBig, MapPin } from 'lucide-react';

import { ICONS } from '@/lib/constants/icons';

import { TechBadge } from '@/components/common/TechBadge';

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  techStack: string[];
  companyLogo?: string;
};

const EXPERIENCES: Experience[] = [
  {
    company: 'Web Solutions',
    role: 'Full Stack Developer',
    duration: 'Feb 2022 - Present',
    location: 'City, Country',
    responsibilities: [
      'Built and maintained web applications using Node.js and Express.',
      'Integrated RESTful APIs and third-party services.',
      'Implemented database solutions with MongoDB and PostgreSQL.',
    ],
    techStack: [
      'JavaScript',
      'NodeJS',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'Vue.js',
      'Tailwind CSS',
      'Git',
      'Python',
      'Nuxt',
      'Cheerio',
      'Mongoose',
    ],
    companyLogo: '',
  },
  {
    company: 'Tech Corp',
    role: 'Frontend Developer',
    duration: 'Jan 2020 - Dec 2021',
    location: 'City, Country',
    responsibilities: [
      'Developed user-friendly web interfaces using React and TypeScript.',
      'Collaborated with designers to implement responsive designs.',
      'Optimized application performance and ensured cross-browser compatibility.',
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Git'],
    companyLogo: '',
  },
];

export function ExperienceCard() {
  return (
    <>
      {EXPERIENCES.map((experience, index) => (
        <Card
          key={index}
          className="w-full mb-4 bg-background/50 backdrop-blur-m px-0"
        >
          <CardHeader className="flex items-center gap-4">
            <Avatar className="size-10 self-start">
              <AvatarImage
                src={experience.companyLogo}
                alt={experience.company}
              />
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
          <CardContent className="text-sm">
            <ul className="space-y-1">
              {experience.responsibilities.map((item, idx) => (
                <li key={idx}>
                  <CircleCheckBig
                    className="inline mr-2 mb-1 text-muted-foreground"
                    size={9}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-wrap">
            {experience.techStack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
