import type { PortableTextBlock } from '@portabletext/types';

export function convertStringToPortableText(
  content: string,
): PortableTextBlock[] {
  return [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: content,
          marks: [],
        },
      ],
    },
  ];
}
