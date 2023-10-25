import { FC, useState, useContext } from 'react';
import style from './Dashboard.module.scss';
import sideCover from '../../assets/sideCover.png';
import { ImageContainer } from '../../components/ImageContainer/ImageContainer';
import { BgColorPanel } from '../../components/UI/BgColorPanel/BgColorPanel';
import { Button } from '../../components/UI/Button/Button';
import { ToggleContext } from '../../Contexts/ToggleContext';
import { ToggleButton } from '../../components/UI/ToggleButton/ToggleButton';
import { DownloadPanel } from '../../components/DownloadPanel/DownloadPanel';
import { Header } from '../../components/Header/Header';

export const Dashboard: FC = () => {
  const [isColorPanel, setIsColorPanel] = useState<boolean>(true);
  const [isDownloadPanel, setIsDownloadPanel] = useState<boolean>(false);
  const toggleContext = useContext(ToggleContext);

  return (
    <div className={style.container}>
      <Header />
      <div className={style.sideCoverDiv}>
        <img className={style.sideCover} src={sideCover} alt='sideCover' />
      </div>
      {isColorPanel && (
        <div className={style.editPanelDiv}>
          <BgColorPanel />
          <ToggleButton
            isToggled={toggleContext?.isToggled}
            setToFalse={toggleContext?.toggleFalse}
            setToTrue={toggleContext?.toggleTrue}
          />
        </div>
      )}
      <ImageContainer />
      {isColorPanel && (
        <div className={style.downloadContainer}>
          <Button
            className='download'
            children='Download'
            onClick={() => setIsDownloadPanel(!isDownloadPanel)}
          />
          {isDownloadPanel && (
            <div className={style.downloadPanel}>
              <DownloadPanel isDownloadPanel={isDownloadPanel} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
