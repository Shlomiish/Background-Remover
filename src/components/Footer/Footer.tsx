import { FC } from 'react';
import { BsGithub } from 'react-icons/bs';
import style from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={style.container}>
      <div className={style.footerTitleDiv}>
        <div className={style.iconDiv}>
          <BsGithub />
        </div>
        <span className={style.footerTitle}>Built by Shlomi Shoshani</span>
      </div>
    </footer>
  );
};
