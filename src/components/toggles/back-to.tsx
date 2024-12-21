import Link from 'next/link';
import { cn } from '@/lib/utils';

export type BackToProps = React.ComponentProps<typeof Link>;

const BackTo: React.FC<BackToProps> = ({ className, children, ...props }) => {
  return (
    <Link
      {...props}
      className={cn(
        'group relative flex w-fit flex-nowrap rounded border border-black/15 py-1.5 pl-8 pr-3 transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black dark:border-white/20 dark:hover:bg-white/5 dark:hover:text-white',
        className,
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="absolute left-2 top-1/2 size-4 -translate-y-1/2 fill-none stroke-current stroke-2"
      >
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          className="translate-x-2 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
        />
        <polyline
          points="12 5 5 12 12 19"
          className="translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
        />
      </svg>
      <div className="text-sm">{children}</div>
    </Link>
  );
};

export default BackTo;
