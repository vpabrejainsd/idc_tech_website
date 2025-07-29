'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { LinkProps as NavLinkProps } from '@/types';

interface BannerDropdown {
  id: number;
  title: string;
  navItem: NavLinkProps[];
}

interface BannerItem {
  id: number;
  title: string;
  description: string;
  link: NavLinkProps[];
  dropdown: BannerDropdown[];
}

interface BannerProps {
  banner: BannerItem;
}

export function Banner({ banner }: Readonly<BannerProps>) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {banner.link.map((link) => (
        <Link key={link.id} href={link.href} target={link.isExternal ? '_blank' : '_self'}>
          {link.text}
        </Link>
      ))}

      {banner.dropdown.map((dd) => (
        <div key={dd.id}>
          <button onClick={() => setOpen(open === dd.id ? null : dd.id)}>
            {dd.title}
          </button>
          {open === dd.id && (
            <ul>
              {dd.navItem.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} target={item.isExternal ? '_blank' : '_self'}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}