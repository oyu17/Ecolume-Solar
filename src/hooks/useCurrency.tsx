import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Currency, CONVERSION_RATE } from '../constants';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (pricePHP: number) => string;
  convert: (pricePHP: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('PHP');

  const convert = (pricePHP: number) => {
    return currency === 'PHP' ? pricePHP : pricePHP * CONVERSION_RATE;
  };

  const formatPrice = (pricePHP: number) => {
    const value = convert(pricePHP);
    return new Intl.NumberFormat(currency === 'PHP' ? 'en-PH' : 'en-US', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: currency === 'PHP' ? 0 : 2,
    }).format(value);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convert }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error('useCurrency must be used within a CurrencyProvider');
  return context;
};
