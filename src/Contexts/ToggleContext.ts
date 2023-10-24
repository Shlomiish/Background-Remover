import { createContext } from 'react';

interface ToggleContextType {
  isToggled: boolean;
  toggleTrue: () => void;
  toggleFalse: () => void;
}

export const ToggleContext = createContext<ToggleContextType | undefined>(undefined);
