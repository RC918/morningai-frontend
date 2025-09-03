'use client';

interface CanonicalLinkProps {
  pathname: string;
}

export function CanonicalLink({ pathname }: CanonicalLinkProps) {
  // 建構 canonical URL
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;
  
  return (
    <link
      rel="canonical"
      href={canonicalUrl}
    />
  );
}

