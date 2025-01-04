import React, { Suspense } from 'react';
import { Gem } from 'lucide-react';
import { UpgradeIcon } from '@/app/(ai)/ai/components/icons';
import { Title } from '@/app/(ai)/ai/components/wrapper';
import { Button } from '@/components/ui/button';

const SkeletonItem = () => {
  return (
    <div className="shadow-xs relative space-y-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
      <div className="h-6 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-600"></div>
      <div className="h-6 w-3/4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-600"></div>
      <div className="h-6 w-1/4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-600"></div>
    </div>
  );
};

export default function PlansBillingPage() {
  return (
    <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
      <Title
        title="Plans & Billing"
        description="Manage your subscription and billing information."
      />

      <div className="grid max-w-5xl grid-cols-1 gap-4 pt-6 sm:gap-6 xl:grid-cols-2">
        <Suspense
          fallback={[1, 2].map((i) => (
            <SkeletonItem key={i} />
          ))}
        >
          <div className="shadow-xs relative space-y-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <p className="text-base font-medium text-gray-950 dark:text-white">
                  Free Plan - Maximum 10 credits
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-sm bg-white px-2 py-1 text-xs font-medium text-gray-950 ring-1 ring-gray-200 dark:bg-gray-800 dark:text-white dark:ring-gray-700">
                <div className="size-2 rounded-full bg-gray-500" />
                Free
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Gem className="size-4 text-gray-400" />
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                Upgrade for unlimited usage and more features.
              </p>
            </div>
            <div className="flex flex-col justify-start gap-4 sm:flex-row">
              <Button className="rounded-sm bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-50 dark:focus-visible:outline-0">
                Upgrade Plan
                <UpgradeIcon className="size-5" />
              </Button>
            </div>
          </div>
          <div className="space-y-4" />
        </Suspense>
      </div>
    </div>
  );
}
