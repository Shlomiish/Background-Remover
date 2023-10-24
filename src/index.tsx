import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ToggleProvider } from './Providers/ToggleProvider';
import { ColorPickerProvider } from './Providers/ColorPickerProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ColorPickerProvider>
      <ToggleProvider>
        <App />
      </ToggleProvider>
    </ColorPickerProvider>
  </React.StrictMode>
);
