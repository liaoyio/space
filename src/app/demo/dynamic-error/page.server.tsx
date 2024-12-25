import { ReactNode } from 'react';

type Props = Readonly<{ children: ReactNode }>;

export function ServerHomeLayout({ children }: Props) {
  return <div>{children}</div>;
}

export default function DefaultHomeLayout({ children }: Props) {
  return <div>{children}</div>;
}
