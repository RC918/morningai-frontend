// Google Analytics 4 全域類型
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: {
        page_location?: string;
        page_title?: string;
        send_page_view?: boolean;
        event_category?: string;
        event_label?: string;
        value?: number;
        custom_parameter_locale?: string;
        custom_parameter_page?: string;
      }
    ) => void;
    dataLayer: any[];
  }
}

// Mixpanel 全域類型
declare global {
  interface Window {
    mixpanel: {
      init: (token: string, config?: any) => void;
      track: (eventName: string, properties?: Record<string, any>) => void;
      identify: (userId: string) => void;
      people: {
        set: (properties: Record<string, any>) => void;
      };
    };
  }
}

export {};

