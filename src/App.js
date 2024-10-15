import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Error from './pages/Error/error';
import Service from './pages/Service/service';
import Gallery from './pages/Gallery/gallery';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import Nav from './components/Nav/nav';
import Footer from './components/Footer/footer';
import './index.css';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/gallery/:id' element={<Gallery />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
