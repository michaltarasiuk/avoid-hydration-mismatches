'use client';

import {getLastUpdated} from '@/tools/get-last-update';

export function LastUpdated() {
  const date = getLastUpdated();

  return (
    <span suppressHydrationWarning>
      Last updated at: {date.toLocaleTimeString()}
    </span>
  );
}
