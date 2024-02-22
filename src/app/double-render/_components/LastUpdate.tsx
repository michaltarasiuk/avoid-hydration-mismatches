'use client';

import {getLastUpdated} from '@/tools/get-last-update';
import {useEffect, useState} from 'react';

export function LastUpdated() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const date = getLastUpdated();
  return <span>Last updated at: {date.toLocaleTimeString()}</span>;
}
