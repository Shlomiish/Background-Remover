import { FC, useState, useContext, useRef } from 'react';
import style from './ImageContainer.module.scss';
import { Button } from '../UI/Button/Button';
import { ToggleContext } from '../../Contexts/ToggleContext';
import { OriginalImg } from '../OriginalImg/OriginalImg';
import { BgRemovedImg } from '../BgRemovedImg/BgRemovedImg';
import { API_REQUESTS } from '../../api/requests/requests';
import { GridLoader } from 'react-spinners';
import { ColorPickerContext } from '../../Contexts/ColorPickerContext';
import { BgColoredImg } from '../BgColoredImg/BgColoredImg';
import { CanvasContext } from '../../Contexts/CanvasContext';

export const ImageContainer: FC = () => {
  const toggleContext = useContext(ToggleContext);
  const colorPickerContext = useContext(ColorPickerContext);
  const uploadFileRef = useRef<HTMLInputElement>(null);
  const [isLoader, setIsLoader] = useState<Boolean>(false);
  const canvasContext = useContext(CanvasContext);

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    let file = e?.target?.files?.[0];

    if (file) {
      formData.append('uploadedFile', file);
      setIsLoader(true);

      try {
        if (file?.type === 'image/jpeg' || file?.type === 'image/png') {
          API_REQUESTS.UPLOAD_IMAGE_FUNC(formData).then((res) => {
            setTimeout(() => {
              canvasContext?.setImageFileNameFunc(res.data);
              setIsLoader(false);
            }, 3000);
          });
        }
      } catch (error) {
        setIsLoader(false);
        console.log(error);
      }
    }
  };

  const openFileInputByRef = () => {
    uploadFileRef.current?.click();
  };

  return (
    <div className={style.container}>
      {canvasContext?.imageFileName === null ? (
        isLoader ? (
          <GridLoader size={60} color='#3e97dc' />
        ) : (
          <>
            <Button children='Upload Photo' className='upload' onClick={openFileInputByRef} />
            <input
              type='file'
              ref={uploadFileRef}
              className={style.inputFile}
              onChange={(e) => uploadImage(e)}
            />
          </>
        )
      ) : toggleContext?.isToggled ? (
        <OriginalImg />
      ) : colorPickerContext?.color === 'none' ? (
        <BgRemovedImg />
      ) : (
        <BgColoredImg color={colorPickerContext?.color ? colorPickerContext?.color : 'none'} />
      )}
    </div>
  );
};
