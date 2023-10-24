import { FC, useState, useContext } from 'react';
import style from './BgColorPanel.module.scss';

import { ChooseColor } from '../ChooseColor/ChooseColor';
import { ColorPickerContext } from '../../../Contexts/ColorPickerContext';

import { HexColorPicker } from 'react-colorful';

export const BgColorPanel: FC = () => {
  const buttonColorCountArray = ['none', 'white', 'black', 'pink', 'yellow', 'gradient'];
  const [color, setColor] = useState<any>();

  const colorPickerContext = useContext(ColorPickerContext);

  return (
    <div className={style.container}>
      {colorPickerContext?.isColorPicker && (
        <div className={style.colorPickerDiv}>
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      )}
      <div className={style.colorsDiv}>
        {buttonColorCountArray.map((colorName, index) => (
          <ChooseColor
            setColorPickerFalse={colorPickerContext?.setFalse}
            toggleColorPicker={colorPickerContext?.toggle}
            key={index}
            color={colorName}
          />
        ))}
      </div>
    </div>
  );
};
