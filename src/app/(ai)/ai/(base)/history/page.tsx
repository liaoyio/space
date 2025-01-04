import React from 'react';
import { Paintbrush } from 'lucide-react';
import { Title } from '@/app/(ai)/ai/components/wrapper';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const list = [...Array.from({ length: 0 })].map((_, i) => ({
  id: i + 1,
  fileName: '/asd.tsx',
  uploaded: 'Paid',
  status: 'error',
}));

function FilesTableList() {
  return (
    <Table className="min-w-full rounded-lg">
      <TableHeader className="overflow-hidden bg-gray-50 dark:bg-gray-800 [&_tr]:border-0">
        <TableRow className="">
          <TableHead className="rounded-l-lg py-3 text-left text-xs uppercase">File Name</TableHead>
          <TableHead className="py-3 text-left text-xs uppercase"> Uploaded on</TableHead>
          <TableHead className="rounded-r-lg py-3 text-left text-xs uppercase"> Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map((it) => (
          <TableRow key={it.id}>
            <TableCell className="py-3 hover:rounded-lg">{it.fileName}</TableCell>
            <TableCell className="py-3 hover:rounded-lg">{it.uploaded}</TableCell>
            <TableCell className="py-3 hover:rounded-lg">{it.uploaded}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function FilesPage() {
  return (
    <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
      <Title
        title="History"
        description="View your recent history of conversions, generations, and explanations."
      />
      <hr className="border-gray-200 dark:border-gray-700" />

      <div>
        <div className="flex items-center justify-between gap-6 pt-2">
          <div className="rounded-sm border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-900 dark:border-green-950/60 dark:bg-green-950/50 dark:text-green-400">
            The history is stored on your device (your browser&apos;s local storage). We do not
            store your input or output code.
          </div>

          <div className="flex justify-end gap-4">
            <button className="sm:auto inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-base tracking-tight text-red-600 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-200 hover:bg-red-50 hover:ring-red-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-red-500 dark:ring-gray-700 dark:hover:bg-red-800 dark:hover:text-red-100 dark:hover:ring-red-400 sm:text-sm">
              <Paintbrush className="size-4" />
              Clear History
            </button>
          </div>
        </div>
      </div>

      <div className="flow-root">
        <div className="inline-block min-w-full px-6 py-2 align-middle lg:px-0">
          <FilesTableList />
        </div>
      </div>
    </div>
  );
}
