import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginPopup from './components/LoginPopup/LoginPopup';

import HomePage from './pages/home';
import NewsPage from './pages/news';

function App() {

  const [modalActive, setModalActive] = useState(false);

  return (
    <React.Fragment>
      <Header active={modalActive} setActive={setModalActive} />
      <main id="main">
        <Routes>
          <Route path='/news' element={<NewsPage />} />
          <Route exact path='/' element={<HomePage />} />
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
        <LoginPopup active={modalActive} setActive={setModalActive}/>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
