import type { PortableTextComponents } from '@portabletext/react';
import { PortableText } from '@portabletext/react';

import { Section } from '@/components/layout/Section';
import { getAbout } from '@/lib/cms';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
    h2: ({ children }) => <h2 className="text-lg font-bold">{children}</h2>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
  },
};

export async function AboutSection() {
  const about = await getAbout();

  return (
    <Section ariaLabel="About Section">
      <Section.Content className="space-y-4">
        <h1 className="text-2xl font-bold">{about.title}</h1>
        <PortableText value={about.content} components={components} />
      </Section.Content>
    </Section>
  );
}
