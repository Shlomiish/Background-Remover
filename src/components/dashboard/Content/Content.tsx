import { FC } from 'react';
import style from './Content.module.scss';
import { SideCover } from './SideCover/SideCover';
import { ImageViewerContainer } from './ImageViewerContainer/ImageViewerContainer';

export const Content: FC = () => (
  <div className={style.container}>
    <div className={`${style.contentDiv} ${style.sideCover}`}>
      <SideCover />
    </div>
    <div className={style.contentDiv}>
      <ImageViewerContainer />
    </div>
  </div>
);
