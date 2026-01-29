import './globals.css';

import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Serhat Ünver | Software Engineer',
    template: '%s | Serhat Ünver',
  },
  description:
    'Portfolio of Serhat Ünver, a Full-Stack JavaScript Software Engineer specializing in building scalable web applications.',
  metadataBase: new URL('https://serhatunver.vercel.app'),
  authors: [
    {
      name: 'Serhat Ünver',
      url: 'https://serhatunver.vercel.app',
    },
  ],
  generator: 'Next.js',
  applicationName: 'Serhat Ünver',
  referrer: 'origin-when-cross-origin',
  creator: 'Serhat Ünver',
  publisher: 'Serhat Ünver',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  keywords: [
    'Serhat Ünver',
    'Software Engineer',
    'Full Stack Developer',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'MERN Stack',
    'Web Applications',
    'UI/UX',
    'Portfolio',
  ],

  // openGraph: {
  //   title: 'Serhat Ünver | Software Engineer',
  //   description:
  //     'Full-Stack JavaScript Software Engineer building scalable web applications.',
  //   url: 'https://serhatunver.vercel.app',
  //   siteName: 'Serhat Ünver',
  //   locale: 'en_EN',
  //   type: 'website',
  //   images: [
  //     {
  //       url: '/og.png',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Serhat Ünver – Software Engineer',
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
