import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty';

export default function NotFound() {
  return (
    <Empty className="py-20">
      <EmptyContent>
        <EmptyHeader>
          <EmptyTitle>404 - Page Not Found</EmptyTitle>
          <EmptyDescription>
            Oops! The page you are looking for does not exist.
          </EmptyDescription>
        </EmptyHeader>
      </EmptyContent>
    </Empty>
  );
}
