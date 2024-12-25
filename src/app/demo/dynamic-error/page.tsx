/* eslint-disable prettier/prettier */
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const ServerComponent = dynamic(() => import('./page.server').then((mod) => mod.ServerHomeLayout), { ssr: true });

const ServerDefaultComponent = dynamic(() => import('./page.server'), { ssr: true });

const ClientComponent = dynamic(() => import('./page.client').then((mod) => mod.ClientHomeLayout), { ssr: true });

const ClientDefaultComponent = dynamic(() => import('./page.client'), { ssr: true });

export default function Layout() {
  return (
    <>
      <Suspense fallback={<> loading ...</>}>
        <ClientComponent>
          <p>ClientModHomeLayout</p>
        </ClientComponent>

        <ClientDefaultComponent>
          <p>ClientDefaultHomeLayout</p>
        </ClientDefaultComponent>

        <ServerComponent>
          <p>ServerModHomeLayout</p>
        </ServerComponent>
        <ServerDefaultComponent>
          <p>ServerDefaultHomeLayout</p>
        </ServerDefaultComponent>
      </Suspense>
    </>
  );
}
