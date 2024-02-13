import React from 'react';
import './styles/index.scss';
import { MainPage } from '../pages/MainPage/MainPage';
import { Header } from '../modules/Header/ui/Header';
import { Route, Routes } from 'react-router-dom';
import { Footer } from '../modules/Footer';
import axios from 'axios';
import { useText } from './providers/TextContext';
import { Loading } from '../components/Loading/LoadingSvg';

function App() {
  const { getText, text } = useText()
  const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    getText()
  }, [])
  if (!text) return <Loading />
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
