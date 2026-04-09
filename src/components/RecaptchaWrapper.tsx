import React, { useState, useCallback } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import ReCAPTCHA from 'react-google-recaptcha';

const v3SiteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY;
const v2SiteKey = import.meta.env.VITE_RECAPTCHA_V2_SITE_KEY;

interface RecaptchaWrapperProps {
  children: React.ReactNode;
}

export const RecaptchaProvider: React.FC<RecaptchaWrapperProps> = ({ children }) => {
  if (!v3SiteKey || v3SiteKey === '#') {
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={v3SiteKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
};

export const useRecaptchaScore = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [needsV2Fallback, setNeedsV2Fallback] = useState(false);

  const verifyV3 = useCallback(async (action: string) => {
    if (!executeRecaptcha) {
      console.warn('Execute recaptcha not yet available');
      return null;
    }

    const token = await executeRecaptcha(action);
    // In a real app, you would send this token to your backend to get the score.
    // For demo purposes, we'll simulate a random score check.
    const simulatedScore = Math.random(); 
    console.log(`Simulated v3 score for ${action}:`, simulatedScore);

    if (simulatedScore < 0.5) {
      setNeedsV2Fallback(true);
      return null;
    }

    return token;
  }, [executeRecaptcha]);

  return { verifyV3, needsV2Fallback, setNeedsV2Fallback };
};

export const RecaptchaV2Fallback: React.FC<{ onVerify: (token: string | null) => void }> = ({ onVerify }) => {
  if (!v2SiteKey || v2SiteKey === '#') return null;

  return (
    <div className="my-4">
      <ReCAPTCHA
        sitekey={v2SiteKey}
        onChange={onVerify}
      />
    </div>
  );
};
