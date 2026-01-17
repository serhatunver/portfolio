import { ArrowRight, CircleCheckBig } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/animate-ui/components/buttons/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BlogPostType } from '@/types/content';

export function BlogPostCard({ blogPost }: { blogPost: BlogPostType }) {
  return (
    <Card className="mb-6 w-full">
      <CardHeader>
        <CardTitle className="text-lg">{blogPost.title}</CardTitle>
        <CardDescription>{blogPost.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          {blogPost.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="mr-2 mb-2 bg-purple-800 text-white">
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
