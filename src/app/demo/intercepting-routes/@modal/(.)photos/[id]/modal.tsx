'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="absolute bottom-0 left-0 right-0 top-0 z-[1000] flex items-center justify-center bg-black/60">
      <dialog
        ref={dialogRef}
        className="border-1 relative flex h-auto max-h-[500px] w-10/12 max-w-[500px] items-center justify-center rounded-xl border-gray-100 p-5 px-1 text-5xl font-medium"
        onClose={onDismiss}
      >
        {children}
        <button
          onClick={onDismiss}
          className="flex-center absolute right-2.5 top-2.5 size-10 cursor-pointer rounded-xl border-none bg-transparent text-2xl font-medium text-white after:content-['×'] hover:bg-gray-100/60 hover:text-black"
        />
      </dialog>
    </div>,
    document.getElementById('modal-root')!,
  );
}
