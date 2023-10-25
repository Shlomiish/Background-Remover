import { FC, useState, useContext, useRef } from 'react';
import style from './ImageContainer.module.scss';
import { Button } from '../UI/Button/Button';
import { ToggleContext } from '../../Contexts/ToggleContext';
import { OriginalImg } from '../OriginalImg/OriginalImg';
import { BgRemovedImg } from '../BgRemovedImg/BgRemovedImg';
import { API_REQUESTS } from '../../api/requests/requests';
import { GridLoader } from 'react-spinners';

interface Props {
  sendImageToDashboard: (image: string) => void;
}

export const ImageContainer: FC<Props> = ({ sendImageToDashboard }) => {
  const toggleContext = useContext(ToggleContext);
  const [image, setImage] = useState<File | null>(null);
  const uploadFileRef = useRef<HTMLInputElement>(null);
  const [isLoader, setIsLoader] = useState<Boolean>(false);

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    let file = e?.target?.files?.[0];

    if (file) {
      formData.append('uploadedFile', file);
    }
    if (file?.type === 'image/jpeg' || file?.type === 'image/png') {
      setIsLoader(true);
      setTimeout(() => {
        API_REQUESTS.UPLOAD_IMAGE_FUNC(formData).then((res) => {
          setImage(res.data);
          sendImageToDashboard(res.data);
          setIsLoader(false);
        });
      }, 3000);
    }
  };

  const openFileInputByRef = () => {
    uploadFileRef.current?.click();
  };
  return (
    <div className={style.container}>
      {!image ? (
        isLoader ? (
          <GridLoader size={60} color='#3e97dc' />
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
        <OriginalImg imageFromParent={image} />
      ) : (
        <BgRemovedImg />
      )}
    </div>
  );
};
