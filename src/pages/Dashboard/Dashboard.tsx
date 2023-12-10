import { FC, PropsWithChildren } from 'react';
import style from './Dashboard.module.scss';
import { Header } from '../../components/Header/Header';
import { downloadImageFunc } from '../../services/downloadImageFunc';
import { Content } from '../../components/Content/Content';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <div className={style.container}>
      <Header />
      <div className={style.content}>{children}</div>
      <Footer />
    </div>
  </>
);

export const Dashboard: FC = () => {
  return (
    <Layout>
      <Content />
      {/* <div className={style.sideCoverDiv}>
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
        </div> */}
    </Layout>
  );
};
