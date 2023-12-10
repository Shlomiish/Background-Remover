export const downloadImageFunc = (canvasRef: any, imageNameFilName: string | null | undefined) => {
  if (canvasRef !== null) {
    if (canvasRef.current) {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const dataURL = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'PhotoBox_' + imageNameFilName;
        link.click();
      }
    }
  }
};
