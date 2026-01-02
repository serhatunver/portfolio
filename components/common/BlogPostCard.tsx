import Link from 'next/link';
import { BlogPost } from '@/types/content';
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
import { ArrowRight, CircleCheckBig } from 'lucide-react';

export function BlogPostCard({ blogPost }: { blogPost: BlogPost }) {
  return (
    <Card className="w-full mb-6 bg-background/50 backdrop-blur-m">
      <CardHeader>
        <CardTitle className="text-lg">{blogPost.title}</CardTitle>
        <CardDescription>{blogPost.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          {blogPost.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-purple-800 text-white mr-2 mb-2"
            >
              <CircleCheckBig />
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <CardAction>
          <Button asChild variant="link" size="sm" className="self-start">
            <Link href={`/blog/${blogPost.slug}`}>
              Read More
              <ArrowRight />
            </Link>
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
