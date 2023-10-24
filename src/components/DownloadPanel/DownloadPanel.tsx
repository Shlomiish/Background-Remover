import { FC } from 'react';
import style from './DownloadPanel.module.scss';

interface Props {
  isDownloadPanel: boolean;
}

export const DownloadPanel: FC<Props> = ({ isDownloadPanel }) => {
  return (
    <div className={isDownloadPanel ? `${style.container} ${style.open}` : style.container}>
      <button className={style.btn}>
        <div className={style.btnText}>Standard resolution</div>
        <span className={style.title}>Image 612 x 408 px</span>
      </button>

      <button className={style.btn}>
        <div className={style.btnText}>
          High resolution (HD) <div className={style.proText}>Pro</div>
        </div>
        <span className={style.title}>Image 1280 x 1920 px</span>
      </button>
    </div>
  );
};
