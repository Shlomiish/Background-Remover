import { FC } from 'react';
import style from './Content.module.scss';
import { SideCover } from '../UI/SideCover/SideCover';
import { ImageViewerContainer } from '../ImageViewerContainer/ImageViewerContainer';

export const Content: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.sideCoverDiv}>
        <SideCover />
      </div>
      <div className={style.imgViewerContainerDiv}>
        <ImageViewerContainer />
      </div>
    </div>
  );
};
