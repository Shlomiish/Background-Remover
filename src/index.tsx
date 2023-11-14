import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ToggleProvider } from './Providers/ToggleProvider';
import { ColorPickerProvider } from './Providers/ColorPickerProvider';
import { CanvasProvider } from './Providers/CanvasProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CanvasProvider>
      <ColorPickerProvider>
        <ToggleProvider>
          <App />
        </ToggleProvider>
      </ColorPickerProvider>
    </CanvasProvider>
  </React.StrictMode>
);
