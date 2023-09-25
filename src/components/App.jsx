import About from '../Pages/About'
import Errors from '../Pages/Errors'
import Contacts from '../Pages/Contacts'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer'
import { useState } from 'react';
import Formaregistration from './Header/Formaregistration/Formaregistration';
import Formautorisation from './Header/Formautorisation/Formautorisation';
import Basketall from '../Pages/Basketall';




function App(props) {
  const [FormAuth, setFormAuth] = useState(false)
  const [FormRegistr, setFormRegistr] = useState(false)
  const [basketall, setBasketall] = useState(false)
  const [main, setMain] = useState(false)

  function openFormAuth() {
    setFormAuth(true);
  }
  function openFormRegistr() {
    setFormRegistr(true);
  }
  function openBasketall() {
    setBasketall(true);
  }

function openMain() {
  setMain(true);
}
return (

  <div className="App">
    <Router>
      <header>
        <Header
        openMain={openMain}
          openFormAuth={openFormAuth}
          openFormRegistr={openFormRegistr}
          openBasketall={openBasketall} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/autorisation' element={<Formautorisation />} />
          <Route path='/registration' element={<Formaregistration />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/about' element={<About />} />
          <Route path='/errors' element={<Errors />} />
          <Route path='/basketall' element={<Basketall />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>


    </Router>
  </div>

);
}

export default App;
