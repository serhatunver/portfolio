import * as SimpleIcons from '@icons-pack/react-simple-icons';
import type { IconType } from '@icons-pack/react-simple-icons';

export const ICONS: Record<
  string,
  { Icon: IconType; hex: string; darkInvert?: boolean }
> = {
  React: { Icon: SimpleIcons.SiReact, hex: SimpleIcons.SiReactHex },
  NodeJS: { Icon: SimpleIcons.SiNodedotjs, hex: SimpleIcons.SiNodedotjsHex },
  TypeScript: {
    Icon: SimpleIcons.SiTypescript,
    hex: SimpleIcons.SiTypescriptHex,
  },
  JavaScript: {
    Icon: SimpleIcons.SiJavascript,
    hex: SimpleIcons.SiJavascriptHex,
  },
  Express: {
    Icon: SimpleIcons.SiExpress,
    hex: SimpleIcons.SiExpressHex,
    darkInvert: true,
  },
  MongoDB: {
    Icon: SimpleIcons.SiMongodb,
    hex: SimpleIcons.SiMongodbHex,
  },
  PostgreSQL: {
    Icon: SimpleIcons.SiPostgresql,
    hex: SimpleIcons.SiPostgresqlHex,
  },
  Docker: {
    Icon: SimpleIcons.SiDocker,
    hex: SimpleIcons.SiDockerHex,
  },
  'Next.js': {
    Icon: SimpleIcons.SiNextdotjs,
    hex: SimpleIcons.SiNextdotjsHex,
    darkInvert: true,
  },
  'Tailwind CSS': {
    Icon: SimpleIcons.SiTailwindcss,
    hex: SimpleIcons.SiTailwindcssHex,
  },
  Git: {
    Icon: SimpleIcons.SiGit,
    hex: SimpleIcons.SiGitHex,
  },
  'Vue.js': {
    Icon: SimpleIcons.SiVuedotjs,
    hex: SimpleIcons.SiVuedotjsHex,
  },
  Nuxt: {
    Icon: SimpleIcons.SiNuxt,
    hex: SimpleIcons.SiNuxtHex,
  },
  Python: {
    Icon: SimpleIcons.SiPython,
    hex: SimpleIcons.SiPythonHex,
  },
  Cheerio: {
    Icon: SimpleIcons.SiCheerio,
    hex: SimpleIcons.SiCheerioHex,
  },
  Mongoose: {
    Icon: SimpleIcons.SiMongoose,
    hex: SimpleIcons.SiMongooseHex,
  },
  Storybook: {
    Icon: SimpleIcons.SiStorybook,
    hex: SimpleIcons.SiStorybookHex,
  },
};
