import { FC } from 'react';
import style from './CloseButton.module.scss';
import { GrClose } from 'react-icons/gr';

interface Props {
  onClick?: () => void;
}

export const CloseButton: FC<Props> = ({ onClick }) => {
  return (
    <button className={style.closeBtn} onClick={onClick}>
      <GrClose />
    </button>
  );
};
