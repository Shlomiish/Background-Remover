import { FC, ReactNode, useState } from 'react';
import { ColorPickerContext } from '../Contexts/ColorPickerContext';

interface Props {
  children: ReactNode;
}

export const ColorPickerProvider: FC<Props> = ({ children }) => {
  const [isColorPicker, setIsColorPicker] = useState(false);
  const [color, setColor] = useState<string>('none');

  const toggle = () => {
    setIsColorPicker(!isColorPicker);
  };

  const setFalse = () => {
    setIsColorPicker(false);
  };

  const handleColorChange = (color: string) => {
    color !== undefined && setColor(color);
  };

  return (
    <ColorPickerContext.Provider
      value={{ toggle, setFalse, isColorPicker, color, handleColorChange }}
    >
      {children}
    </ColorPickerContext.Provider>
  );
};
