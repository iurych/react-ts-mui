/* eslint-disable react/prop-types */ /* eslint-disable linebreak-style */
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { DarkTheme, LightTheme } from '../themes';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

interface IAppThemeProviderProps {
  children: React.ReactNode;
}
const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }: IAppThemeProviderProps) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName((OldThemeName) =>
      OldThemeName === 'light' ? 'dark' : 'light'
    );
  }, []);
  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
