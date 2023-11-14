import { createContext } from 'react';

interface CanvasContextType {
  canvasRef: any;
  imageFileName: string | null;
  setImageFileNameFunc: (imageFileName: string | null) => void;
}

export const CanvasContext = createContext<CanvasContextType | undefined>(undefined);
