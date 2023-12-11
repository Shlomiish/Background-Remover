import { FC, useEffect, useContext } from 'react';
import style from './OriginalImg.module.scss';
import { BASE_URL } from '../../../../../api/endpoints/endpoints';
import { CanvasContext } from '../../../../../Contexts/CanvasContext';
import { ToggleContext } from '../../../../../Contexts/ToggleContext';
import { CloseButton } from '../../../../UI/CloseButton/CloseButton';

export const OriginalImg: FC = () => {
  const canvasContext = useContext(CanvasContext);
  const toggleContext = useContext(ToggleContext);
  const imageSource = BASE_URL + '/' + canvasContext?.imageFileName;

  useEffect(() => {
    const img = new Image();
    img.src = imageSource;
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
  }, [imageSource]);
  return (
    <div className={style.imgContainer}>
      <canvas className={style.originalImg} ref={canvasContext?.canvasRef} />
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
