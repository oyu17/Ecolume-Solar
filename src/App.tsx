import React, { useEffect } from 'react';
import { CurrencyProvider } from './hooks/useCurrency';
import { AppRouter } from './router';
import { AnalyticsService } from './services/analyticsService';
import { RecaptchaProvider } from './components/RecaptchaWrapper';

export default function App() {
  useEffect(() => {
    AnalyticsService.initialize();
  }, []);

  return (
    <RecaptchaProvider>
      <CurrencyProvider>
        <AppRouter />
      </CurrencyProvider>
    </RecaptchaProvider>
  );
}
