import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { prettyDate } from '@/lib/dayjs';
import { cn } from '@/lib/utils';
import { TagPrefixIcon } from './tags';

type BlogListItemProps = {
  href: string;
  tags: (string | null)[] | null | undefined;
  title: string;
  description?: string;
  date?: string;
};

export const PostItem = ({ tags, href, title, description, date }: BlogListItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex h-full flex-col justify-between rounded-lg px-6 py-4 text-primary transition-colors',
        'bg-transparent hover:bg-primary-foreground',
      )}
    >
      <ul className="mb-2 flex space-x-4 text-xs font-medium text-muted-foreground">
        {tags &&
          tags.map((tag) => (
            <li key={tag} className="flex items-center">
              <span className="mr-1">#&nbsp;{tag}</span>
              {tag && <TagPrefixIcon tag={tag.toLowerCase()} />}
            </li>
          ))}
      </ul>
      <h4 className="mb-2 line-clamp-1 text-xl font-medium">{title}</h4>
      <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{description}</p>
      <div className="flex space-x-2 text-xs text-muted-foreground">
        <div className="flex h-5 items-center space-x-1">
          <Calendar className="size-3" />
          <time dateTime={new Date(date!).toISOString()}>{prettyDate(date!)}</time>
        </div>
      </div>
    </Link>
  );
};
