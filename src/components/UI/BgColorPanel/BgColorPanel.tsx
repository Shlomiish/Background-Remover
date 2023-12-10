import { FC, useContext, useState } from 'react';
import style from './BgColorPanel.module.scss';
import { ChooseColorButton } from '../ChooseColorButton/ChooseColorButton';
import { ColorPickerContext } from '../../../Contexts/ColorPickerContext';
import { HexColorPicker } from 'react-colorful';
import { ToggleContext } from '../../../Contexts/ToggleContext';

export const BgColorPanel: FC = () => {
  const buttonColorCountArray = ['none', 'white', 'black', 'pink', 'blue', 'yellow', 'gradient'];
  const colorPickerContext = useContext(ColorPickerContext);
  const toggleContext = useContext(ToggleContext);
  const [hexColor, setHexColor] = useState<string>();

  const handleColorChange = (e: string) => {
    const color = e;
    if (color !== 'gradient') {
      colorPickerContext?.handleColorChange(color);
      colorPickerContext?.setFalse();
      toggleContext?.toggleFunc(false);
    }

    toggleColorPicker(color);
  };

  const toggleColorPicker = (color: string) => {
    color === 'gradient' &&
      colorPickerContext?.toggle() !== undefined &&
      colorPickerContext.toggle();
  };

  const hexColorChange = (e: string) => {
    let color = e;
    colorPickerContext?.handleColorChange(color);
    toggleContext?.toggleFunc(false);
  };

  return (
    <div className={style.container}>
      {colorPickerContext?.isColorPicker && (
        <div className={style.colorPickerDiv}>
          <HexColorPicker
            onChange={(e) => {
              hexColorChange(e);
            }}
            color={hexColor}
          />
        </div>
      )}
      <div className={style.colorsDiv}>
        {buttonColorCountArray.map((color, index) => (
          <ChooseColorButton key={index} color={color} onClick={() => handleColorChange(color)} />
        ))}
      </div>
    </div>
  );
};
