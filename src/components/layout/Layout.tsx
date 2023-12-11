import { FC, PropsWithChildren } from 'react';
import style from './Layout.module.scss';
import { TopBar } from '../TopBar/TopBar';
import { Footer } from '../Footer/Footer';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <TopBar />
    <div className={style.container}>
      <div className={style.content}>{children}</div>
    </div>
    <Footer />
  </>
);
