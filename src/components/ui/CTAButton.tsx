'use client';

import { useParams, usePathname } from 'next/navigation';
import { trackCTAClick } from '@/lib/analytics';
import { Button } from './Button';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  ctaText?: string; // 用於分析追蹤
}

export function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  ctaText,
  ...props
}: CTAButtonProps) {
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;

  const handleClick = () => {
    // 追蹤 CTA 點擊事件
    if (ctaText) {
      trackCTAClick(ctaText, locale, pathname);
    }
    
    // 執行原始點擊處理
    if (onClick) {
      onClick();
    }
    
    // 如果有 href，導航到目標頁面
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
}

