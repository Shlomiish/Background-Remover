import { FC, useState, useContext, useRef } from 'react';
import style from './ImageViewer.module.scss';
import { Button } from '../../../UI/Button/Button';
import { ToggleContext } from '../../../../Contexts/ToggleContext';
import { OriginalImg } from './OriginalImg/OriginalImg';
import { BgRemovedImg } from './BgRemovedImg/BgRemovedImg';
import { API_REQUESTS } from '../../../../api/requests/requests';
import { ColorPickerContext } from '../../../../Contexts/ColorPickerContext';
import { BgColoredImg } from './BgColoredImg/BgColoredImg';
import { CanvasContext } from '../../../../Contexts/CanvasContext';
import { Loader } from '../../../UI/Loader/Loader';

export const ImageViewer: FC = () => {
  const toggleContext = useContext(ToggleContext);
  const colorPickerContext = useContext(ColorPickerContext);
  const uploadFileRef = useRef<HTMLInputElement>(null);
  const [isLoader, setIsLoader] = useState<Boolean>(false);
  const canvasContext = useContext(CanvasContext);

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const formData = new FormData();
    // let file = e?.target?.files?.[0];
    // if (file) {
    //   formData.append('uploadedFile', file);
    //   setIsLoader(true);
    //   try {
    //     if (file?.type === 'image/jpeg' || file?.type === 'image/png') {
    //       API_REQUESTS.UPLOAD_IMAGE_FUNC(formData).then((res) => {
    //         canvasContext?.setImageFileNameFunc(res.data);
    //         setIsLoader(false);
    //       });
    //     }
    //   } catch (error) {
    //     setIsLoader(false);
    //     console.log(error);
    //   }
    // }

    const apiUrl = 'https://photobox-background-remover-api-yjog.onrender.com';
    fetch(apiUrl)
      .then((response) => console.log('hey from frontttt', response))
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  const openFileInputByRef = () => {
    uploadFileRef.current?.click();
  };

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        {canvasContext?.imageFileName === null ? (
          isLoader ? (
            <Loader />
          ) : (
            <div className={style.btnDiv}>
              <Button children='Upload Photo' className='upload' onClick={openFileInputByRef} />
              <input
                type='file'
                ref={uploadFileRef}
                className={style.inputFile}
                onChange={(e) => uploadImage(e)}
              />
            </div>
          )
        ) : toggleContext?.isToggled ? (
          <OriginalImg />
        ) : colorPickerContext?.color === 'none' ? (
          <BgRemovedImg />
        ) : (
          <BgColoredImg />
        )}
      </div>
    </div>
  );
};
