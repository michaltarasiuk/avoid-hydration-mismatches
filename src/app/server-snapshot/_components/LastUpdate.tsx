'use client';

import {getLastUpdated} from '@/tools/get-last-update';
import {useSyncExternalStore} from 'react';

const emptySubscribe = () => () => {};

export function LastUpdated() {
  const date = useSyncExternalStore(
    emptySubscribe,
    () => getLastUpdated().toLocaleTimeString(),
    () => null,
  );

  return date ? <span>Last updated at: {date}</span> : null;
}
