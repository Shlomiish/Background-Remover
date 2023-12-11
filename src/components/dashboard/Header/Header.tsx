import { FC } from 'react';
import style from './Header.module.scss';
// import headerImg from '../../assets/remove_background.svg';

export const Header: FC = () => (
  <div className={style.container}>
    {/* <div className={style.headerImageDiv}>
        <img className={style.headerImage} src={headerImg} alt='headerImg' />
      </div> */}
    <div className={style.headerTextDiv}>
      <h1 className={style.headerText}>Background Remover</h1>
      <span className={style.title}>
        Erase image backgrounds for free and replace it with different backgrounds of your choosing.
      </span>
    </div>
  </div>
);
