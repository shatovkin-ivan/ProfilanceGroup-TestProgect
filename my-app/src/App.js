import React from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginPopup from './components/LoginPopup/LoginPopup';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main id="main">
        <LoginPopup />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
