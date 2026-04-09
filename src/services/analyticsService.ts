import ReactGA from 'react-ga4';
import ReactPixel from 'react-facebook-pixel';

export const AnalyticsService = {
  initialize() {
    const ga4Id = import.meta.env.VITE_GA4_MEASUREMENT_ID;
    const pixelId = import.meta.env.VITE_META_PIXEL_ID;

    if (ga4Id && ga4Id !== '#') {
      ReactGA.initialize(ga4Id);
      console.log('GA4 Initialized');
    }

    if (pixelId && pixelId !== '#') {
      ReactPixel.init(pixelId);
      console.log('Meta Pixel Initialized');
    }
  },

  pageView(path: string) {
    const ga4Id = import.meta.env.VITE_GA4_MEASUREMENT_ID;
    const pixelId = import.meta.env.VITE_META_PIXEL_ID;

    if (ga4Id && ga4Id !== '#') {
      ReactGA.send({ hitType: 'pageview', page: path });
    }

    if (pixelId && pixelId !== '#') {
      ReactPixel.pageView();
    }
  },

  trackEvent(category: string, action: string, label?: string) {
    const ga4Id = import.meta.env.VITE_GA4_MEASUREMENT_ID;
    const pixelId = import.meta.env.VITE_META_PIXEL_ID;

    if (ga4Id && ga4Id !== '#') {
      ReactGA.event({ category, action, label });
    }

    if (pixelId && pixelId !== '#') {
      ReactPixel.track(action, { category, label });
    }
  }
};
