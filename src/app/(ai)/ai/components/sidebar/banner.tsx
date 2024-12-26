import React from 'react';
import Link from 'next/link';
import { UpgradeIcon } from '../icons';

export default function TopBanner() {
  return (
    <div className="flex rounded-t-lg items-center justify-center gap-2 border-b border-yellow-200 bg-yellow-50 p-2 dark:border-yellow-900/50 dark:bg-yellow-950/50">
      <p className="text-xs font-normal text-yellow-900 dark:text-yellow-400 sm:text-sm">
        You are on the free plan and have
        <span className="hidden sm:inline">
          <span className="font-bold">10 credits</span> left.
        </span>
      </p>
      <Link
        className="text-warning-900 hover:text-warning-800 dark:text-warning-400 dark:hover:text-warning-300 inline-flex items-center gap-1 text-xs font-medium transition-all duration-200 sm:text-sm"
        href="/plans-billing"
      >
        Upgrade Now
        <UpgradeIcon className="size-4" />
      </Link>
    </div>
  );
}
