'use client';

import { useEffect } from 'react';
import { getSupabaseClient } from '../../supabase-utils/client';

export default function Home() {
  useEffect(() => {
    const supabase = getSupabaseClient();
    supabase.storage.listBuckets().then((result) => console.log('Bucket list', result));
  }, []);

  return <div>home page</div>;
}
