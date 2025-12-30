import type { Education } from '@/types/content';

export const education: Education[] = [
  {
    id: '1',
    degree: 'Master of Science',
    department: 'Software Engineering',
    institution: 'Tech University of London',
    duration: '2020 - 2022',
    location: 'London, United Kingdom',
    details:
      'Specialized in software architecture, project management, and advanced programming concepts.',
    gpa: '3.9 / 4.0',
    institutionLogo:
      'https://upload.wikimedia.org/wikipedia/commons/b/b8/%C3%87ukurova_University_logo.svg',
  },
  {
    id: '2',
    degree: 'Bachelor of Science',
    department: 'Computer Science',
    institution: 'Berlin University of Technology (Erasmus+)',
    duration: '2016 - 2020',
    location: 'Berlin, Germany',
    details:
      'Graduated with honors, focusing on software development, algorithms, and data structures.',
    gpa: '3.8 / 4.0',
    institutionLogo:
      'https://pollub.pl/fcp/sPREgARcJNScXKxEMUA9DA2ltVyVUFDFqUVJWazkALV96cypSPhRaWXI0D1ZUShtGPlY7MRk8VhIgXFdYVmsjBzRWKw/_global/public/biuro_rektora/zdjecia/logo_politechniki_lubelskiej.jpg',
  },
];
