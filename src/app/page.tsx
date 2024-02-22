'use client';

import {ClientGate} from '@/components/ClientGate';

export default function App() {
  return (
    <main>
      Hello Server
      <br />
      <ClientGate>{() => `Hello Client ${document.title}`}</ClientGate>
    </main>
  );
}
