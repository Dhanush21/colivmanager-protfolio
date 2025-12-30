// Google Analytics 4 event tracking utility

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Predefined tracking functions for common events
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || 'unknown',
  });
};

export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form_submission', {
    form_name: formName,
    success,
  });
};

export const trackNavigation = (destination: string) => {
  trackEvent('navigation_click', {
    destination,
  });
};

export const trackExternalLink = (url: string, linkName: string) => {
  trackEvent('external_link_click', {
    url,
    link_name: linkName,
  });
};

export const trackScrollDepth = (percentage: number, pagePath: string) => {
  trackEvent('scroll_depth', {
    depth_percentage: percentage,
    page_path: pagePath,
  });
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-FH3SD6F8WD', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
};

export const trackTimeOnPage = (seconds: number, pagePath: string) => {
  trackEvent('time_on_page', {
    time_seconds: seconds,
    page_path: pagePath,
  });
};

export const trackVideoPlay = (videoTitle: string, currentTime?: number) => {
  trackEvent('video_play', {
    video_title: videoTitle,
    current_time: currentTime || 0,
  });
};

export const trackVideoPause = (videoTitle: string, currentTime: number) => {
  trackEvent('video_pause', {
    video_title: videoTitle,
    current_time: currentTime,
  });
};

export const trackVideoComplete = (videoTitle: string) => {
  trackEvent('video_complete', {
    video_title: videoTitle,
  });
};

export const trackVideoProgress = (videoTitle: string, percentage: number) => {
  trackEvent('video_progress', {
    video_title: videoTitle,
    progress_percentage: percentage,
  });
};
