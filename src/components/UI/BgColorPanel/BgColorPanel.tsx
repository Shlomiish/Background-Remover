import { FC, useContext, useState } from 'react';
import style from './BgColorPanel.module.scss';

import { ChooseColorButton } from '../ChooseColorButton/ChooseColorButton';
import { ColorPickerContext } from '../../../Contexts/ColorPickerContext';

import { HexColorPicker } from 'react-colorful';
import { API_REQUESTS } from '../../../api/requests/requests';

interface Props {
  imageNameFromParent?: string;
}

export const BgColorPanel: FC<Props> = ({ imageNameFromParent }) => {
  const buttonColorCountArray = ['none', 'white', 'black', 'pink', 'yellow', 'gradient'];
  const colorPickerContext = useContext(ColorPickerContext);
  const [hexColor, setHexColor] = useState<string>();

  const handleColorChange = (e: string) => {
    const color = e;
    if (color !== 'gradient') {
      colorPickerContext?.handleColorChange(color);
      // uploadBgColor(color);
      colorPickerContext?.setFalse();
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
    //setHexColor(newColor);
    colorPickerContext?.handleColorChange(color);

    //uploadBgColor(e);
  };

  const uploadBgColor = async (color: string) => {
    if (imageNameFromParent && colorPickerContext?.color) {
      try {
        const formData = new FormData();
        formData.append('uploadedFileName', imageNameFromParent);
        formData.append('color', color);
        API_REQUESTS.SET_BG_COLOR_FUNC(formData)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
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
