'use client';

function getLastUpdated() {
  return new Date();
}

export function LastUpdated() {
  const date = getLastUpdated();

  return (
    <span suppressHydrationWarning>
      Last updated at: {date.toLocaleTimeString()}
    </span>
  );
}
