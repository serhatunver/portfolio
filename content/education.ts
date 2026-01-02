import type { Education } from '@/types/content';

export const education: Education[] = [
  {
    _id: '1',
    institution: 'Cukurova University',
    degree: 'Bachelor of Science',
    department: 'Computer Engineering',
    startDate: 'Sep 2020',
    isCurrent: false,
    endDate: 'Dec 2025',
    location: 'Adana, Türkiye',
    description:
      'Focused on core computer engineering topics including software development, algorithms, and computer systems, with a strong emphasis on practical projects.',
    gpa: '3.22 / 4.0',
    institutionLogo:
      'https://upload.wikimedia.org/wikipedia/commons/b/b8/%C3%87ukurova_University_logo.svg',
  },
  {
    _id: '2',
    institution: 'Lublin University of Technology (Erasmus+)',
    degree: 'Bachelor of Science',
    department: 'Computer Science',
    startDate: 'Sep 2024',
    isCurrent: false,
    endDate: 'Feb 2025',
    location: 'Lublin, Poland',
    description:
      'Completed an Erasmus+ exchange program focused on computer science courses, gaining international academic experience and working in a diverse environment.',
    gpa: '3.83 / 4.0',
    institutionLogo:
      'https://pollub.pl/fcp/sPREgARcJNScXKxEMUA9DA2ltVyVUFDFqUVJWazkALV96cypSPhRaWXI0D1ZUShtGPlY7MRk8VhIgXFdYVmsjBzRWKw/_global/public/biuro_rektora/zdjecia/logo_politechniki_lubelskiej.jpg',
  },
];
