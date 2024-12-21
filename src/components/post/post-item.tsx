import Link from "next/link";
import { Calendar } from "lucide-react";
import { TagPrefixIcon } from "./tags";
import { cn } from "@/lib/utils";
import { prettyDate } from "@/lib/dayjs";


type BlogListItemProps = {
  href: string
  tags: (string | null)[] | null | undefined
  title: string
  description?: string
  date?: string
};

export const PostItem = ({ tags, href, title, description, date }: BlogListItemProps) => {


  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col justify-between h-full text-primary px-6 py-4 transition-colors rounded-lg",
        "bg-transparent hover:bg-primary-foreground ",
      )}
    >
      <ul className="mb-2 flex space-x-4 text-xs font-medium text-muted-foreground">
        {tags && tags.map((tag) => (
          <li key={tag} className="flex items-center">
            <span className="mr-1">#&nbsp;{tag}</span>
            {tag && <TagPrefixIcon tag={tag.toLowerCase()} />}
          </li>
        ))}
      </ul>
      <h4 className="mb-2 line-clamp-1 text-xl font-medium">{title}</h4>
      <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
        {description}
      </p>
      <div className="flex space-x-2 text-xs text-muted-foreground">
        <div className="flex h-5 items-center space-x-1">
          <Calendar className="size-3" />
          <time dateTime={new Date(date!).toISOString()}>
            {prettyDate(date!)}
          </time>
        </div>
      </div>
    </Link>
  );
};
