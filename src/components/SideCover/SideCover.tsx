import { FC } from 'react';
import style from './SideCover.module.scss';
import sideCover from '../../assets/sideCover.png';

export const SIdeCover: FC = () => {
  return (
    <div className={style.sideCoverDiv}>
      <img src={sideCover} alt='sideCover' />
    </div>
  );
};
