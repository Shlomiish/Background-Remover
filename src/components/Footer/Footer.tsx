import { FC } from 'react';
import { BsGithub } from 'react-icons/bs';
import style from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={style.container}>
      {/* <div className={style.footerTitleDiv}>
        <div className={style.iconDiv}>
          <BsGithub />
        </div>

        <span onClick={window.location=link} className={style.footerTitle}>Built by Shlomi Shoshani</span>
      </div> */}
      <a
        href='https://github.com/Shlomiish'
        className={style.footerLink}
        target='_blank'
        rel='noreferrer'
      >
        <BsGithub />
        <p>Built by Shlomi Shoshani</p>
      </a>
    </footer>
  );
};
