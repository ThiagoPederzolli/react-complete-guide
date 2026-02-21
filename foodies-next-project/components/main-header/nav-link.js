'use client';
// we should use 'use client' as far down the component tree as possible.
// so we can keep the majority of our components as React Server Components
import Link from 'next/link';
import classes from './nav-link.module.css';
import { usePathname } from 'next/navigation';
export default function NavLink({ href, text}) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}
    >
      {text}
    </Link>
  )
}