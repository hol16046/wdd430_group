'use client';

import {
  BuildingStorefrontIcon,
  MapIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  UserIcon

} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import React from 'react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/', icon: BuildingStorefrontIcon },
  { name: 'Explore', href: '/explore', icon: MapIcon },
  { name: 'Cart', href: '/shopping-cart', icon: ShoppingCartIcon },
  { name: 'Artists', href: '/artists', icon: UserGroupIcon},
  { name: 'Profile', href: '/profile', icon: UserIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex">
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        return (
          <React.Fragment key={link.name + index}>
            <Link
              href={link.href}
              className={clsx(
                'flex-auto border border-white rounded hover:border-gray-200 text-black-500 hover:bg-gray-200 py-2 px-4',
                {
                  'text-theme-dark-teal': pathname === link.href,
                },
              )}
            >
              <>
                <LinkIcon className="w-5" />
                <p className="hidden md:block">{link.name}</p>
              </>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}
