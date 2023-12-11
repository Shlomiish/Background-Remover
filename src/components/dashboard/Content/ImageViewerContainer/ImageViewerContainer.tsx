import { FC, useContext } from 'react';
import { ImageViewer } from '../ImageViewer/ImageViewer';
import style from './ImageViewerContainer.module.scss';
import { BgColorPanel } from '../../../UI/BgColorPanel/BgColorPanel';
import { ToggleButton } from '../../../UI/ToggleButton/ToggleButton';
import { ToggleContext } from '../../../../Contexts/ToggleContext';
import { CanvasContext } from '../../../../Contexts/CanvasContext';
import { Button } from '../../../UI/Button/Button';
import { downloadImageFunc } from '../../../../services/downloadImageFunc';
import { ColorPickerContext } from '../../../../Contexts/ColorPickerContext';

export const ImageViewerContainer: FC = () => {
  const toggleContext = useContext(ToggleContext);
  const canvasContext = useContext(CanvasContext);
  const colorPickerContext = useContext(ColorPickerContext);

  return (
    <div className={style.container}>
      {canvasContext?.imageFileName && (
        <div className={style.panelDiv}>
          <div className={style.colorPanelDiv}>
            <BgColorPanel />
          </div>
          <div className={style.togglePanelDiv}>
            <ToggleButton
              isToggled={toggleContext?.isToggled}
              setToFalse={() => toggleContext?.toggleFunc(false)}
              setToTrue={() => toggleContext?.toggleFunc(true)}
              onClick={() => colorPickerContext?.setFalse()}
            />
          </div>
        </div>
      )}

      <div className={style.imgViewerDiv}>
        <ImageViewer />
      </div>
      {canvasContext?.imageFileName && (
        <div className={style.downloadBtnDiv}>
          <Button
            className='download'
            children='Download'
            onClick={() =>
              downloadImageFunc(canvasContext?.canvasRef, canvasContext?.imageFileName)
            }
          />
        </div>
      )}
    </div>
  );
};
