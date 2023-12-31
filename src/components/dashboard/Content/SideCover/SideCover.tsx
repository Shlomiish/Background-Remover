import { FC } from 'react';
import style from './SideCover.module.scss';
import sideCover from '../../../../assets/sideCover.png';

export const SideCover: FC = () => (
  <div className={style.sideCoverDiv}>
    <img className={style.sideCoverImg} src={sideCover} alt='sideCover' />
  </div>
);
