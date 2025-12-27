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
import { BadgeCheckIcon } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Project One',
    description: 'This is the first project description.',
    detailedDescription: 'Detailed information about Project One.',
    techStack: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    githubLink: '#',
    demoLink: '#',
  },
  {
    title: 'Project Two',
    description: 'This is the second project description.',
    detailedDescription: 'Detailed information about Project Two.',
    techStack: [
      'JavaScript',
      'Vue',
      'Nuxt.js',
      'Firebase',
      'CSS',
      'HTML',
      'Git',
    ],
    githubLink: '#',
    demoLink: '#',
  },
];

export function ProjectCard() {
  return (
    <>
      {PROJECTS.map((project, index) => (
        <Card
          key={index}
          className="w-full mb-6 bg-background/50 backdrop-blur-m"
        >
          <CardHeader>
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
            {/* <CardAction>
              <Button asChild variant="link" size="sm" className="self-start">
                <Link href="/">Sign Up</Link>
              </Button>
            </CardAction> */}
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Detailed information about the project can be placed here</p>
            <div>
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-blue-500 text-white dark:bg-blue-600 mr-2 mb-2"
                >
                  <BadgeCheckIcon />
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex gap-1 justify-end">
            <Button asChild variant="link" size="sm">
              <Link href="/">GitHub</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link href="/">Demo</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link href="/">Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
