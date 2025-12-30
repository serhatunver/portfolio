import { ICONS } from '@/lib/constants/icons';
import { Badge } from '@/components/ui/badge';

type TechStackProps = {
  title: string;
  technologies: string[];
};

const techStack: TechStackProps[] = [
  {
    title: 'Frontend',
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Vue.js',
      'Nuxt.js',
      'JavaScript',
      'CSS',
      'HTML',
      'Storybook',
      'Python',
      'Cheerio',
    ],
  },
  {
    title: 'Backend',
    technologies: ['NodeJS', 'Express', 'MongoDB', 'PostgreSQL', 'Mongoose'],
  },
  { title: 'Tools', technologies: ['Git', 'Docker'] },
];

export function TechStack() {
  return (
    <div className="flex flex-col gap-6 py-4">
      {techStack.map((item) => (
        <div key={item.title}>
          {/* Section Title */}
          <h3 className="text-base font-medium mb-2">{item.title}</h3>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => {
              const data = ICONS[tech];
              if (!data) return null;

              const { Icon, hex, darkInvert } = data;

              return (
                <Badge
                  key={`${item.title}-${tech}`}
                  size="lg"
                  // variant="secondary"
                  className="brightness-100 dark:brightness-150"
                  style={{
                    backgroundColor: `${hex}30`,
                    // borderColor: `${darkInvert ? '#ffffff' : hex}50`,
                  }}
                >
                  <Icon
                    color="default"
                    className={`${darkInvert ? 'dark:invert' : ''}`}
                    size={20}
                  />
                  <span className="text-black dark:text-white">{tech}</span>
                </Badge>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
