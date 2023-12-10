import { FC, useContext } from 'react';
import { ImageViewer } from '../ImageViewer/ImageViewer';
import style from './ImageViewerContainer.module.scss';
import { BgColorPanel } from '../UI/BgColorPanel/BgColorPanel';
import { ToggleButton } from '../UI/ToggleButton/ToggleButton';
import { ToggleContext } from '../../Contexts/ToggleContext';
import { CanvasContext } from '../../Contexts/CanvasContext';

export const ImageViewerContainer: FC = () => {
  const toggleContext = useContext(ToggleContext);
  const canvasContext = useContext(CanvasContext);
  return (
    <div className={style.container}>
      <div className={style.panelDiv}>
        <div className={style.togglePanelDiv}>
          <ToggleButton
            isToggled={toggleContext?.isToggled}
            setToFalse={() => toggleContext?.toggleFunc(false)}
            setToTrue={() => toggleContext?.toggleFunc(true)}
          />
        </div>
        <div className={style.colorPanelDiv}>
          <BgColorPanel />
        </div>
      </div>
      <div className={style.imgViewerDiv}>
        <ImageViewer />
      </div>
    </div>
  );
};
