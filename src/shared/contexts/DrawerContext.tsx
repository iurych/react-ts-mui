/* eslint-disable react/prop-types */ /* eslint-disable linebreak-style */
import { TroubleshootTwoTone } from '@mui/icons-material';
import { createContext, useCallback, useContext, useState } from 'react';
import { useAppThemeContext } from './ThemeContext';

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOptions[];
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
}

interface IDrawerOptions {
  icon: string;
  path: string;
  label: string;
}

interface IDrawerProviderProps {
  children: React.ReactNode;
}
const DrawerContext = createContext<IDrawerContextData>(
  {} as IDrawerContextData
);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);
  const { toggleTheme } = useAppThemeContext(); // trocar o TextButton


  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((OldDrawerOpen) => !OldDrawerOpen);
  }, []);

  const handleClick = () => {
    toggleDrawerOpen();
    toggleTheme();
  };

  const handleSetDrwaerOptions = useCallback(
    (newDrawerOptions: IDrawerOptions[]) => {
      setDrawerOptions(newDrawerOptions);
    },
    []
  );

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        toggleDrawerOpen,
        drawerOptions,
        setDrawerOptions: handleSetDrwaerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
