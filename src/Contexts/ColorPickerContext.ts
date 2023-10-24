import { createContext } from 'react';

interface ColorPickerContextType {
  isColorPicker: boolean;
  toggle: () => void;
  setFalse: () => void;
}

export const ColorPickerContext = createContext<ColorPickerContextType | undefined>(undefined);
