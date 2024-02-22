import {LastUpdated} from '@/components/LastUpdated';

export default async function SuppressHydrationWarning() {
  await new Promise((resolve) => setTimeout(resolve, 2_000));

  return <LastUpdated />;
}
