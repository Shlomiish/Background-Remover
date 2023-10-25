import { FC } from 'react';
import style from './OriginalImg.module.scss';
import { Button } from '../UI/Button/Button';
import { BASE_URL } from '../../api/endpoints/endpoints';

interface Props {
  imageFromParent: File | null;
}

export const OriginalImg: FC<Props> = ({ imageFromParent }) => {
  return (
    <div className={style.imgContainer}>
      <img className={style.originalImg} src={BASE_URL + '/' + imageFromParent} alt='' />
    </div>
  );
};
