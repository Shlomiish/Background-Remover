import { FC, useState, useContext } from 'react';
import style from './Dashboard.module.scss';
import { ImageContainer } from '../../components/ImageContainer/ImageContainer';
import { BgColorPanel } from '../../components/UI/BgColorPanel/BgColorPanel';
import { Button } from '../../components/UI/Button/Button';
import { ToggleContext } from '../../Contexts/ToggleContext';
import { ToggleButton } from '../../components/UI/ToggleButton/ToggleButton';
import { Header } from '../../components/Header/Header';
import { SideCover } from '../../components/UI/SideCover/SideCover';
import { downloadImageFunc } from '../../services/downloadImageFunc';
import { CanvasContext } from '../../Contexts/CanvasContext';

export const Dashboard: FC = () => {
  const toggleContext = useContext(ToggleContext);
  const canvasContext = useContext(CanvasContext);

  const [image, setImage] = useState<string>();

  const imageFromChild = (image: string) => {
    setImage(image);
    // canvasContext?.setIsImageFileNameFunc(true);
  };

  return (
    <div className={style.container}>
      <Header />
      <SideCover />
      {canvasContext?.imageFileName && (
        <div className={style.editPanelDiv}>
          <BgColorPanel imageNameFromParent={image} />
          <ToggleButton
            isToggled={toggleContext?.isToggled}
            setToFalse={() => toggleContext?.toggleFunc(false)}
            setToTrue={() => toggleContext?.toggleFunc(true)}
          />
        </div>
      )}
      <ImageContainer />
      {canvasContext?.imageFileName && (
        <div className={style.downloadContainer}>
          <Button
            className='download'
            children='Download'
            onClick={() => downloadImageFunc(canvasContext?.canvasRef, image)}
          />
        </div>
      )}
    </div>
  );
};
