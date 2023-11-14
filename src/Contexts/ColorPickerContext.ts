import { createContext } from 'react';

interface ColorPickerContextType {
  isColorPicker: boolean;
  toggle: () => void;
  setFalse: () => void;
  color: string | undefined;
  handleColorChange: (color: string) => void;
}

export const ColorPickerContext = createContext<ColorPickerContextType | undefined>(undefined);
