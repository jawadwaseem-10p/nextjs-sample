"use client";
import  Link  from "next/link";
import { usePathname } from "next/navigation";
import classes from './nav-link.module.scss';
export default function NavLink({ href, children }) {
  const path = usePathname();
  console.log('children', href);
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? classes.active : undefined}
    >
      {children}
    </Link>
  );
}
