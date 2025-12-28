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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { MapPin } from 'lucide-react';

export type Education = {
  degree: string;
  department: string;
  institution: string;
  duration: string;
  location: string;
  details: string;
  gpa: string;
  institutionLogo: string;
};

const EDUCATIONS = [
  {
    degree: 'Master of Science in Software Engineering',
    institution: 'Tech University',
    duration: '2020 - 2022',
    location: 'City, Country',
    details:
      'Specialized in software architecture, project management, and advanced programming concepts.',
    gpa: '3.9/4.0',
    institutionLogo:
      'https://upload.wikimedia.org/wikipedia/commons/b/b8/%C3%87ukurova_University_logo.svg',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    duration: '2016 - 2020',
    location: 'City, Country',
    details:
      'Graduated with honors, focusing on software development, algorithms, and data structures.',
    gpa: '3.8/4.0',
    institutionLogo:
      'https://pollub.pl/fcp/sPREgARcJNScXKxEMUA9DA2ltVyVUFDFqUVJWazkALV96cypSPhRaWXI0D1ZUShtGPlY7MRk8VhIgXFdYVmsjBzRWKw/_global/public/biuro_rektora/zdjecia/logo_politechniki_lubelskiej.jpg',
  },
];

export function EducationCard() {
  return (
    <>
      {EDUCATIONS.map((education, index) => (
        <Card key={index} className="w-full bg-background mb-2">
          <CardContent className="flex items-center gap-4">
            <Avatar className="size-10 self-start">
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

            <div className="flex w-full flex-col">
              <CardHeader className="p-0">
                <CardTitle className="text-base">
                  {education.institution}
                </CardTitle>
                <CardDescription>
                  {education.degree} &#8226; {education.duration}
                  <div>
                    <MapPin className="inline mb-1 mr-1 size-4" />
                    {education.location}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-2">
                <p className="text-sm">{education.details}</p>
              </CardContent>
              <CardFooter className="p-0 pt-2">
                <p className="text-sm">GPA: {education.gpa}</p>
              </CardFooter>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
