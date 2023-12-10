import { FC, ReactNode, useRef, useState } from 'react';
import { CanvasContext } from '../Contexts/CanvasContext';

interface Props {
  children: ReactNode;
}

export const CanvasProvider: FC<Props> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageFileName, setImageFileName] = useState<string | null>(null);

  const setImageFileNameFunc = (imageFileName: string | null) => {
    setImageFileName(imageFileName);
    console.log(imageFileName);
  };
  return (
    <CanvasContext.Provider value={{ canvasRef, setImageFileNameFunc, imageFileName }}>
      {children}
    </CanvasContext.Provider>
  );
};
