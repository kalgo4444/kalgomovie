'use client';

import { useLayoutEffect } from 'react';

export default function ScrollToTop() {
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);
  return null;
}
