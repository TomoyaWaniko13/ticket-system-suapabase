'use client';

import * as React from 'react';
import { Login } from '@/componentns/Login';

type SearchParams = {
  magicLink?: string;
};

type Props = {
  searchParams: Promise<SearchParams>;
};

export default function LoginPage({ searchParams }: Props) {
  // Use React.use to properly handle the Promise
  const params = React.use(searchParams);
  const wantsMagicLink = params.magicLink === 'yes';

  return <Login isPasswordLogin={!wantsMagicLink} />;
}
