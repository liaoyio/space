'use client';

import { useEffect, useState } from 'react';
import { CheckIcon, ClipboardIcon } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CopyButtonProps extends ButtonProps {
  value: string;
}

export function CopyButton({ value, className, variant = 'ghost', ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value || '');
    setHasCopied(true);
  };

  return (
    <>
      <Button
        size="icon"
        variant={variant}
        className={cn(
          'relative z-10 h-6 w-6 [&_svg]:h-3 [&_svg]:w-3',
          'dark:text-zinc-50 dark:hover:bg-zinc-700',
          className,
        )}
        onClick={copyToClipboard}
        {...props}
      >
        <span className="sr-only">Copy</span>
        {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
      </Button>
    </>
  );
}
