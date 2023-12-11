import { FC, useEffect, useContext } from 'react';
import style from './BgRemovedImg.module.scss';
import { BASE_URL } from '../../../../../api/endpoints/endpoints';
import { CanvasContext } from '../../../../../Contexts/CanvasContext';
import { ToggleContext } from '../../../../../Contexts/ToggleContext';
import { CloseButton } from '../../../../UI/CloseButton/CloseButton';

export const BgRemovedImg: FC = () => {
  const canvasContext = useContext(CanvasContext);
  const toggleContext = useContext(ToggleContext);
  const noBgImageSource = BASE_URL + '/' + 'no-bg_' + canvasContext?.imageFileName;

  useEffect(() => {
    const img = new Image();
    img.src = noBgImageSource;
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const canvas = canvasContext?.canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Set the canvas size to match the image size
          canvas.width = img.width;
          canvas.height = img.height;

          // Draw the image on the canvas
          ctx.drawImage(img, 0, 0);
        }
      }
    };
  }, [noBgImageSource]);

  return (
    <div className={style.imgContainer}>
      <div className={style.imageDiv}>
        <canvas className={style.bgRemovedImg} ref={canvasContext?.canvasRef} />
      </div>
      <div className={style.closeBtnDiv}>
        <CloseButton
          onClick={() => {
            canvasContext?.setImageFileNameFunc(null);
            toggleContext?.toggleFunc(false);
          }}
        />
      </div>
    </div>
  );
};
