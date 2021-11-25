import React, { useState } from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginPopup from './components/LoginPopup/LoginPopup';

function App() {

  const [modal, setModal] = useState({
    authorizationModal: true,
  })

  return (
    <React.Fragment>
      <Header />
      <main id="main">
        <LoginPopup 
          isOpened={modal.authorizationModal}
        >
          
        </LoginPopup>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
