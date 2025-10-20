'use client';

import { NAVLINK } from '@/shared/const/nav-link';
import NavLinkItem from './nav-link-item';

export default function NavLink() {
  return (
    <ul className="flex max-md:z-50 max-md:border items-center max-md:justify-evenly max-md:w-full bg-background max-md:fixed max-md:bottom-0 max-md:left-0 md:absolute md:top-1 md:left-1/2 md:-translate-x-1/2 max-md:py-2">
      {NAVLINK.map((nav_link, inx) => (
        <NavLinkItem key={inx} nav_link={nav_link} />
      ))}
    </ul>
  );
}
