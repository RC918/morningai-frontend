// Google Analytics 4 配置
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Mixpanel 配置
export const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '';

// 開發環境檢查
const isDevelopment = process.env.NODE_ENV === 'development';

// 事件類型定義
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  locale?: string;
  page?: string;
}

// 預定義事件
export const EVENTS = {
  CTA_CLICK: 'cta_click',
  DEMO_INTERACT: 'demo_interact', 
  LANG_SWITCH: 'lang_switch',
  SIGNUP_CLICK: 'signup_click',
  PAGE_VIEW: 'page_view',
  FEATURE_VIEW: 'feature_view',
  PRICING_VIEW: 'pricing_view'
} as const;

// GA4 事件追蹤
export const trackGA4Event = (event: AnalyticsEvent) => {
  try {
    if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_parameter_locale: event.locale,
        custom_parameter_page: event.page
      });
    } else if (isDevelopment) {
      console.log('📊 GA4 Event (Dev):', event);
    }
  } catch (error) {
    console.warn('GA4 tracking error:', error);
  }
};

// Mixpanel 事件追蹤
export const trackMixpanelEvent = (event: AnalyticsEvent) => {
  try {
    if (typeof window !== 'undefined' && window.mixpanel && typeof window.mixpanel.track === 'function') {
      window.mixpanel.track(event.action, {
        category: event.category,
        label: event.label,
        value: event.value,
        locale: event.locale,
        page: event.page,
        timestamp: new Date().toISOString()
      });
    } else if (isDevelopment) {
      console.log('📈 Mixpanel Event (Dev):', event);
    }
  } catch (error) {
    console.warn('Mixpanel tracking error:', error);
  }
};

// 統一事件追蹤函數
export const trackEvent = (event: AnalyticsEvent) => {
  trackGA4Event(event);
  trackMixpanelEvent(event);
};

// 頁面瀏覽追蹤
export const trackPageView = (url: string, locale: string) => {
  try {
    // GA4 頁面瀏覽
    if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
      window.gtag('config', GA_TRACKING_ID, {
        page_location: url,
        custom_parameter_locale: locale
      });
    }
    
    // Mixpanel 頁面瀏覽
    if (typeof window !== 'undefined' && window.mixpanel && typeof window.mixpanel.track === 'function') {
      window.mixpanel.track('Page View', {
        url,
        locale,
        timestamp: new Date().toISOString()
      });
    } else if (isDevelopment) {
      console.log('📄 Page View (Dev):', { url, locale });
    }
  } catch (error) {
    console.warn('Page view tracking error:', error);
  }
};

// CTA 點擊追蹤
export const trackCTAClick = (ctaText: string, locale: string, page: string) => {
  trackEvent({
    action: EVENTS.CTA_CLICK,
    category: 'engagement',
    label: ctaText,
    locale,
    page
  });
};

// 語言切換追蹤
export const trackLanguageSwitch = (fromLocale: string, toLocale: string, page: string) => {
  trackEvent({
    action: EVENTS.LANG_SWITCH,
    category: 'navigation',
    label: `${fromLocale}_to_${toLocale}`,
    locale: toLocale,
    page
  });
};

// Demo 互動追蹤
export const trackDemoInteraction = (interactionType: string, locale: string) => {
  trackEvent({
    action: EVENTS.DEMO_INTERACT,
    category: 'demo',
    label: interactionType,
    locale,
    page: 'demo'
  });
};

// 註冊點擊追蹤
export const trackSignupClick = (source: string, locale: string, page: string) => {
  trackEvent({
    action: EVENTS.SIGNUP_CLICK,
    category: 'conversion',
    label: source,
    locale,
    page
  });
};

// 開發環境 Mock 函數
if (isDevelopment && typeof window !== 'undefined') {
  // Mock gtag for development
  if (!window.gtag) {
    window.gtag = (...args: any[]) => {
      console.log('🔍 gtag (mock):', args);
    };
  }
  
  // Mock mixpanel for development
  if (!window.mixpanel) {
    window.mixpanel = {
      track: (event: string, properties?: any) => {
        console.log('🔍 mixpanel.track (mock):', event, properties);
      },
      init: () => {},
      identify: () => {},
      people: {
        set: () => {}
      }
    };
  }
}

