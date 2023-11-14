import { FC, useEffect, useContext } from 'react';
import style from './BgColoredImg.module.scss';
import { BASE_URL } from '../../api/endpoints/endpoints';
import { CanvasContext } from '../../Contexts/CanvasContext';
import { ToggleContext } from '../../Contexts/ToggleContext';
import { CloseButton } from '../UI/CloseButton/CloseButton';

interface Props {
  color: string;
}
export const BgColoredImg: FC<Props> = ({ color }) => {
  const canvasContext = useContext(CanvasContext);
  const toggleContext = useContext(ToggleContext);
  const BgColoredImageSource = BASE_URL + '/' + 'no-bg_' + canvasContext?.imageFileName;

  useEffect(() => {
    const img = new Image();
    img.src = BgColoredImageSource;
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const canvas = canvasContext?.canvasRef?.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Set the canvas size to match the image size
          canvas.width = img.width;
          canvas.height = img.height;

          // Apply the background color
          ctx.fillStyle = color;
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Draw the image on the canvas
          ctx.drawImage(img, 0, 0);
        }
      }
    };
  }, [color]);

  return (
    <div className={style.imgContainer}>
      <canvas ref={canvasContext?.canvasRef} />
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
