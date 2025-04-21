import React, { createContext, useContext, ReactNode } from 'react';

// Theme type definition
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    backgroundDark: string;
    backgroundLight: string;
    text: string;
    textSecondary: string;
    success: string;
    warning: string;
    error: string;
  };
  gradients: {
    primary: string[];
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

// Default theme
const defaultTheme: Theme = {
  colors: {
    primary: '#8661DD',
    secondary: '#3D3BBB',
    accent: '#B4A5FF',
    backgroundDark: '#1C1B2D',
    backgroundLight: '#2A293E',
    text: '#FFFFFF',
    textSecondary: 'rgba(255, 255, 255, 0.6)',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#FF5A5A',
  },
  gradients: {
    primary: ['#512888', '#3D3BBB'],
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 30,
  },
};

// Create context
interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
});

// Provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const value = {
    theme: defaultTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// Hook for using the theme context
export const useTheme = () => useContext(ThemeContext);