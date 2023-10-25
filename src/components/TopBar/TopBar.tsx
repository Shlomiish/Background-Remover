import { FC } from 'react';
import style from './TopBar.module.scss';
import logo from '../../assets/logo.svg';

interface Props {}

export const TopBar: FC<Props> = () => {
  return (
    <div className={style.container}>
      <img src={logo} alt='svg-logo' className={style.logo} />
    </div>
  );
};
