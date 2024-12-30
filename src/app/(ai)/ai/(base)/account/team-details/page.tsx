import Link from 'next/link';

export default function page() {
  return (
    <div className="mt-4">
      <p className="text-sm font-normal text-gray-950 dark:text-white">
        You are currently on an individual plan. Please
        <Link
          className="px-1 text-blue-500 transition-all duration-200 hover:underline hover:underline-offset-4 dark:text-blue-400"
          href="/ai/plans-billing"
        >
          upgrade to a team plan
        </Link>
        to invite team members. Or, switch to a workspace with team access.
      </p>
    </div>
  );
}
