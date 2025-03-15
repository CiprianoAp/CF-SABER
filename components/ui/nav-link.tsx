'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  activeClassName?: string;
  exact?: boolean;
}

export function NavLink({
  href,
  children,
  className,
  activeClassName = 'text-purple-600 bg-purple-50',
  exact = false,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact 
    ? pathname === href
    : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
        'hover:bg-slate-100',
        isActive && activeClassName,
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
} 