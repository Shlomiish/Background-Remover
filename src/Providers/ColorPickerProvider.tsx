import { FC, ReactNode, useState } from 'react';
import { ColorPickerContext } from '../Contexts/ColorPickerContext';

interface Props {
  children: ReactNode;
}

export const ColorPickerProvider: FC<Props> = ({ children }) => {
  const [isColorPicker, setIsColorPicker] = useState(false);

  const toggle = () => {
    setIsColorPicker(!isColorPicker);
  };

  const setFalse = () => {
    setIsColorPicker(false);
    console.log(isColorPicker);
  };

  return (
    <ColorPickerContext.Provider value={{ toggle, setFalse, isColorPicker }}>
      {children}
    </ColorPickerContext.Provider>
  );
};
