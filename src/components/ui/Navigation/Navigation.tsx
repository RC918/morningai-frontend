'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ThemeSwitcher } from '@/components/theme/theme-switcher';
import { LanguageSwitcher } from '@/components/language/language-switcher';
import { cn } from '@/lib/utils';

interface NavigationItem {
  href: string;
  label: string;
  key: string;
}

interface NavigationProps {
  className?: string;
  brand?: string;
  items?: NavigationItem[];
}

export function Navigation({ 
  className,
  brand = "Morning AI",
  items
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('navigation');

  const defaultItems: NavigationItem[] = [
    { href: '/', label: t('home'), key: 'home' },
    { href: '/components', label: t('components'), key: 'components' },
    { href: '/documentation', label: t('documentation'), key: 'documentation' },
    { href: '/about', label: t('about'), key: 'about' },
    { href: '/contact', label: t('contact'), key: 'contact' }
  ];

  const navigationItems = items || defaultItems;

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname.match(/^\/[a-z]{2}(-[A-Z]{2})?$/);
    }
    return pathname.includes(href);
  };

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 font-bold text-xl hover:text-primary transition-colors"
          >
            <span>{brand}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  "relative py-2 px-1",
                  isActiveLink(item.href) 
                    ? "text-primary" 
                    : "text-muted-foreground"
                )}
              >
                {item.label}
                {isActiveLink(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    isActiveLink(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Actions */}
              <div className="flex items-center justify-between px-3 py-2 mt-4 pt-4 border-t border-border">
                <ThemeSwitcher />
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

