'use client';

import {getLastUpdated} from '@/tools/get-last-update';

export function LastUpdated() {
  if (typeof window === 'undefined') {
    throw Error('LastUpdated should only render on the client.');
  }

  const date = getLastUpdated();
  return <span>Last updated at: {date.toLocaleTimeString()}</span>;
}
