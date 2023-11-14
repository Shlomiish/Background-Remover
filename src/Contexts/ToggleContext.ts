import { createContext } from 'react';

interface ToggleContextType {
  isToggled: boolean;

  toggleFunc: (toggle: boolean) => void;
}

export const ToggleContext = createContext<ToggleContextType | undefined>(undefined);
