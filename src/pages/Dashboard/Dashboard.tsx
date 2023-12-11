import { FC } from 'react';
import { Content } from '../../components/dashboard/Content/Content';
import { Header } from '../../components/dashboard/Header/Header';

export const Dashboard: FC = () => (
  <>
    <Header />
    <Content />
  </>
);
/* <div className={style.sideCoverDiv}>
          <SideCover />
        </div>
        <div className={style.imageAndPanelsCont}>
          <div
            className={canvasContext?.imageFileName ? style.editPanelDiv : style.editPanelDivHidden}
          >
            <div className={style.toggleBtnDiv}>
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
          <div className={style.imageContainerDiv}>
            <ImageViewer />
          </div>
          <div
            className={
              canvasContext?.imageFileName ? style.downloadPanelDiv : style.downloadPanelDivHidden
            }
          >
            <Button
              className='download'
              children='Download'
              onClick={() =>
                downloadImageFunc(canvasContext?.canvasRef, canvasContext?.imageFileName)
              }
            />
          </div>
        </div> */
