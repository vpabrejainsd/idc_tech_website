'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { LogoProps, LinkProps as NavLinkProps } from '@/types';
import { StrapiImage } from './StrapiImage';

interface NavDropDown {
  id: number;
  title: string;
  navItem: NavLinkProps[];
}

interface HeaderItem {
  id: number;
  logo: LogoProps[];
  navDropDown: NavDropDown[];
  navLink: NavLinkProps[];
}

interface HeaderProps {
  header: HeaderItem[];
}

export default function Header({ header }: Readonly<HeaderProps>) {
  const [open, setOpen] = useState<number | null>(null);
  const item = header[0];
  if (!item) return null;

  return (
    <header>
      {/* Logo on the left */}
      <div>
        {item.logo[0] && (
          <StrapiImage
            src={item.logo[0].image.url}
            alt={item.logo[0].image.alternativeText ?? ''}
            width={120}
            height={120}
          />
        )}
      </div>

      {/* Navigation */}
      <nav>
        {/* Dropdown menus */}
        {item.navDropDown.map((dd) => (
          <div
            key={dd.id}
            onMouseLeave={() => setOpen(null)}
          >
            <button
              onClick={() => setOpen(open === dd.id ? null : dd.id)}
            >
              {dd.title}
            </button>

            {open === dd.id && (
              <ul
              >
                {dd.navItem.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      target={link.isExternal ? '_blank' : '_self'}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Regular nav links */}
        {item.navLink.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            target={link.isExternal ? '_blank' : '_self'}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </header>
  );
}
