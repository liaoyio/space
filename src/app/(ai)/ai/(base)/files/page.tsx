import React from 'react';
import Link from 'next/link';
import { RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { UpgradeIcon, UploadIcon, WarningIcon } from '../../components/icons';
import { Title } from '../../components/wrapper';

const list = [...Array.from({ length: 0 })].map((_, i) => ({
  id: i + 1,
  fileName: '/asd.tsx',
  uploaded: 'Paid',
  status: 'error',
}));

function HistoryTableList() {
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
      <Title title="Files" description="Upload files to add additional context to your code." />
      <hr className="border-gray-200 dark:border-gray-700" />

      <div>
        <div className="flex items-center justify-between gap-6 pt-2">
          <div className="flex items-center justify-between gap-2 rounded-sm border border-yellow-200 bg-yellow-50 px-3 py-2 dark:border-yellow-950/60 dark:bg-yellow-950/50">
            <WarningIcon className="size-5 shrink-0 text-yellow-500 dark:text-yellow-400" />
            <p className="text-sm text-yellow-900 dark:text-yellow-400">
              Your are under free plan. Please upgrade or switch to a workspace with access to add
              more files.
            </p>
            <Link
              href="/ai/plans-billing"
              className="text-warning-900 hover:text-warning-800 dark:text-warning-400 dark:hover:text-warning-300 inline-flex items-center gap-1 text-xs font-medium transition-all duration-200 sm:text-sm"
            >
              Upgrade Plan
              <UpgradeIcon className="size-4" />
            </Link>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline">
              <RotateCw className="size-4" /> Refresh
            </Button>

            {/* <input className="hidden" accept=".txt,.md,.pdf,.json,.py,.pyc,.pyw,.pyx,.js,.jsx,.mjs,.ts,.tsx,.rb,.rbw,.java,.class,.jar,.cpp,.cc,.cxx,.hpp,.hh,.h,.c,.cs,.csx,.go,.rs,.rlib,.php,.phtml,.php3,.php4,.php5,.phps,.r,.R,.rdata,.rds,.rda,.jl,.kt,.kts,.m,.mat,.pl,.pm,.t,.pod,.swift,.scala,.sc,.clj,.cljs,.cljc,.edn,.coffee,.dart,.ex,.exs,.fs,.fsi,.fsx,.fsscript,.groovy,.gvy,.gy,.gsh,.hs,.lhs,.lua,.ml,.mli,.pas,.pp,.inc,.scm,.ss,.rkt,.elm,.hx,.hxml,.cr,.tcl,.vb,.vbs,.m,.mm,.ada,.adb,.ads,.vala,.bas,.cls,.frm,.vb,.vba,.asm,.s,.cob,.cbl,.erl,.hrl,.as,.f,.f90,.f95,.f03,.f08,.lisp,.lsp,.l,.cl,.fasl" required type="file" /> */}

            <Button
              disabled
              className="rounded-sm bg-green-500 shadow-sm hover:bg-green-600 focus-visible:outline-green-600 dark:bg-green-600 dark:hover:bg-green-500 dark:focus-visible:outline-green-500 sm:w-auto sm:text-sm"
            >
              <UploadIcon className="size-4" />
              Upload File
            </Button>
          </div>
        </div>
      </div>

      <div className="flow-root">
        <div className="inline-block min-w-full px-6 py-2 align-middle lg:px-0">
          <HistoryTableList />
        </div>
      </div>
    </div>
  );
}
