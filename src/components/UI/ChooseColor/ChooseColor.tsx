import { FC } from 'react';
import style from './ChooseColor.module.scss';
import btnNoneColorImg from '../../../assets/btnNoneColorImg.png';
import btnGradientImg from '../../../assets/buttonGradientImage.png';

interface Props {
  color: string;
  setColorPickerFalse?: () => void;
  toggleColorPicker?: () => void;
}

export const ChooseColor: FC<Props> = ({ color, setColorPickerFalse, toggleColorPicker }) => {
  const handleStateFromParent = () => {
    if (setColorPickerFalse !== undefined) {
      if (color === 'gradient') {
        toggleColorPicker !== undefined && toggleColorPicker();
      } else {
        setColorPickerFalse !== undefined && setColorPickerFalse();
      }
    }
  };

  return (
    <button
      className={style.btn}
      onClick={handleStateFromParent}
      style={{
        backgroundColor: `${color}`,
        backgroundImage:
          color === 'none'
            ? `url(${btnNoneColorImg})`
            : color === 'gradient'
            ? `url(${btnGradientImg})`
            : '',
        backgroundRepeat: 'no-repeat',
        backgroundSize: color === 'none' ? 'cover' : color === 'gradient' ? '113%' : '',
        backgroundPosition: 'center',
        appearance: 'none',
      }}
    ></button>
  );
};
