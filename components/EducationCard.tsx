import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { MapPin } from 'lucide-react';

const EDUCATIONS = [
  {
    degree: 'Master of Science in Software Engineering',
    institution: 'Tech University',
    duration: '2020 - 2022',
    location: 'City, Country',
    details:
      'Specialized in software architecture, project management, and advanced programming concepts.',
    gpa: '3.9/4.0',
    transcriptLink: '#',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    duration: '2016 - 2020',
    location: 'City, Country',
    details:
      'Graduated with honors, focusing on software development, algorithms, and data structures.',
    gpa: '3.8/4.0',
    transcriptLink: '#',
  },
];

export function EducationCard() {
  return (
    <>
      {EDUCATIONS.map((education, index) => (
        <Card key={index} className="w-full mb-6 border-none bg-background p-0">
          <CardHeader className="p-0">
            <CardTitle className="text-lg">{education.degree}</CardTitle>
            <CardDescription>
              {education.institution} &#8226; {education.duration} &#8226;{' '}
              <MapPin className="inline mb-1 mr-1 size-4" />
              {education.location}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-0">
            <p>{education.details}</p>
            <p>GPA: {education.gpa}</p>
          </CardContent>
          {/* <CardFooter className="flex justify-end">
            <Button asChild variant="link">
              <a
                href={education.transcriptLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Transcript
              </a>
            </Button>
          </CardFooter> */}
        </Card>
      ))}
    </>
  );
}
