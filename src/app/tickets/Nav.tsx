'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getSupabaseBrowserClient } from '@/supabase-utils/browserClient';

// P.104 Logging out using the frontend
export default function Nav() {
  const pathname = usePathname();
  const activeProps = { className: 'contrast' };
  const inactiveProps = { className: 'secondary outline' };

  const supabase = getSupabaseBrowserClient();

  const handleLogout = async (event: MouseEvent) => {
    event.preventDefault();
    await supabase.auth.signOut();
  };

  return (
    <nav>
      <ul>
        <li>
          <Link role='button' href='/tickets' {...(pathname === '/tickets' ? activeProps : inactiveProps)}>
            Ticket List
          </Link>
        </li>
        <li>
          <Link role='button' href='/tickets/new' {...(pathname === '/tickets/new' ? activeProps : inactiveProps)}>
            Create New Ticket
          </Link>
        </li>
        <li>
          <Link role='button' href='/tickets/users' {...(pathname === '/tickets/users' ? activeProps : inactiveProps)}>
            User List
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link role='button' href='/logout' prefetch={false} className='secondary' onClick={handleLogout}>
            Log out
          </Link>
        </li>
      </ul>
    </nav>
  );
}
