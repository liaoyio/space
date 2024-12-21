import { Link } from 'lucide-react';
import { cn } from '@/lib/utils';

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5';
  anchor?: boolean;
};

const Heading: React.FC<HeadingProps> = ({
  id,
  className,
  variant = 'h1',
  anchor = false,
  children,
  ...props
}) => {
  const Variant = variant;
  const showAnchor = anchor && id;

  return (
    <Variant id={id} className={cn('group flex items-center', className)} {...props}>
      {children}
      {showAnchor ? (
        <a className="ml-2 opacity-0 transition-opacity group-hover:opacity-100" href={`#${id}`}>
          <Link className="size-5" />
        </a>
      ) : null}
    </Variant>
  );
};

export default Heading;
