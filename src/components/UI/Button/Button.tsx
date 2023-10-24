import { FC } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { FiDownload } from 'react-icons/fi';
import style from './Button.module.scss';

interface Props {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className: 'upload' | 'download';
}

export const Button: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button className={`${style.btn} ${style[className]}`} onClick={onClick}>
      {className === 'upload' && <FiUploadCloud className={style.uploadIcon} />}
      {className === 'download' && <FiDownload className={style.downloadIcon} />}
      {children}
    </button>
  );
};
