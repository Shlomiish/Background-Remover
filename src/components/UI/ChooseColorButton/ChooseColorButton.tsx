import { FC } from 'react';
import style from './ChooseColorButton.module.scss';
import btnNoneColorImg from '../../../assets/btnNoneColorImg.png';
import btnGradientImg from '../../../assets/buttonGradientImage.png';

interface Props {
  color: string;
  onClick?: () => void;
}

export const ChooseColorButton: FC<Props> = ({ color, onClick }) => {
  const styleProperties: React.CSSProperties | undefined = {
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
  };
  return <button className={style.btn} onClick={onClick} style={styleProperties} />;
};
