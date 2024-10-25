import { PropsWithChildren } from 'react';
import TenantName from '@/app/tickets/TenantName';
import Nav from '@/app/tickets/Nav';

export default function TicketsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <section style={{ borderBottom: '1px solid gray' }}>
        <TenantName tenantName='Packt' />
        <Nav />
      </section>
      <section>{children}</section>
    </>
  );
}
