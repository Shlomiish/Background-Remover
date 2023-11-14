import { FC } from 'react';
import style from './ToggleButton.module.scss';

interface Props {
  setToFalse: () => void;
  setToTrue: () => void;
  isToggled?: boolean;
}

export const ToggleButton: FC<Props> = ({ setToFalse, setToTrue, isToggled }) => {
  return (
    <div className={style.switch}>
      <span className={!isToggled ? `${style.slider} ${style.sliderActive}` : style.slider} />
      <div className={style.beforeAfterDiv}>
        <div
          onClick={setToTrue}
          className={isToggled ? `${style.beforeText} ${style.activeText}` : style.beforeText}
        >
          Before
        </div>
        <div
          onClick={setToFalse}
          className={!isToggled ? `${style.afterText} ${style.activeText}` : style.afterText}
        >
          After
        </div>
      </div>
    </div>
  );
};
