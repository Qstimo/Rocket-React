import React from 'react';
import './styles/index.scss';
import { MainPage } from '../pages/MainPage/MainPage';
import { Header } from '../modules/Header/ui/Header';
import { Route, Routes } from 'react-router-dom';
import { Footer } from '../modules/Footer';

function App() {
  return (
    <div className="app">
      <div className="content-page">
        <Header />
        <div className="page-wrapper">
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
