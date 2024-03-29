import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './app/providers/ModalContext';
import { TextProvider } from './app/providers/TextContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ModalProvider>
      <TextProvider>
        <App />
      </TextProvider>
    </ModalProvider>
  </BrowserRouter>
);


