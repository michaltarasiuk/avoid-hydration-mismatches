import {Suspense} from 'react';
import {LastUpdated} from './_components/LastUpdated';

export const dynamic = 'force-dynamic';

export default function SuspensePage() {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <LastUpdated />
    </Suspense>
  );
}
