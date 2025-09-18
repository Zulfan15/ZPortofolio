'use client';

import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useTheme() {
  const { theme, setTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Return safe values during hydration
  if (!mounted) {
    return {
      theme: 'dark',
      toggleTheme: () => {},
      mounted: false
    };
  }

  return {
    theme: theme || 'dark',
    toggleTheme,
    mounted: true
  };
}