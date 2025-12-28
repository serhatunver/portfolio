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

import { Badge } from '@/components/ui/badge';
import { Github, CircleCheckBig } from 'lucide-react';

const BLOG_POSTS = [
  {
    title: 'Understanding React Hooks',
    description:
      'An in-depth look at React Hooks and how to use them effectively.',
    techStack: ['React', 'JavaScript', 'Web Development'],
    postLink: '#',
  },
  {
    title: 'A Guide to Node.js Performance Optimization',
    description:
      'Tips and techniques for optimizing the performance of your Node.js applications.',
    techStack: ['Node.js', 'JavaScript', 'Backend Development'],
    postLink: '#',
  },
];

export function BlogPostCard() {
  return (
    <>
      {BLOG_POSTS.map((post, index) => (
        <Card
          key={index}
          className="w-full mb-6 bg-background/50 backdrop-blur-m"
        >
          <CardHeader>
            <CardTitle className="text-lg">{post.title}</CardTitle>
            <CardDescription>{post.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              {post.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-blue-500 text-white dark:bg-blue-600 mr-2 mb-2"
                >
                  <CircleCheckBig />
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <CardAction>
              <Button asChild variant="link" size="sm" className="self-start">
                <a
                  href={post.postLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </Button>
            </CardAction>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
