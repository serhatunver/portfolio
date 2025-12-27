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

import { Badge } from '@/components/ui/badge';
import { Github, CircleCheckBig } from 'lucide-react';

const EXPERIENCES = [
  {
    company: 'Web Solutions',
    role: 'Full Stack Developer',
    duration: 'Feb 2022 - Present',
    responsibilities: [
      'Built and maintained web applications using Node.js and Express.',
      'Integrated RESTful APIs and third-party services.',
      'Implemented database solutions with MongoDB and PostgreSQL.',
    ],
    techStack: [
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Docker',
    ],
    companyLink: '#',
  },
  {
    company: 'Tech Corp',
    role: 'Frontend Developer',
    duration: 'Jan 2020 - Dec 2021',
    responsibilities: [
      'Developed user-friendly web interfaces using React and TypeScript.',
      'Collaborated with designers to implement responsive designs.',
      'Optimized application performance and ensured cross-browser compatibility.',
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Git'],
    companyLink: '#',
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
          <CardHeader>
            <CardTitle className="text-lg">
              {experience.role} at {experience.company}
            </CardTitle>
            <CardDescription>{experience.duration}</CardDescription>
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
              <Badge
                key={tech}
                variant="secondary"
                className="bg-green-500 text-white dark:bg-green-600 mr-2 mb-2"
              >
                <Github />
                {tech}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
