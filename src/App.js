import {Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import Nav from './pages/header/Nav';
import Home from './pages/main/Home';
import Portfolio from './pages/main/Portfolio.jsx';
import Blog from './pages/main/Blog.jsx';
import Service from './pages/main/Service.jsx';
import Contact from './pages/main/Contact.jsx';
import Footer from './pages/footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/portfolio' element= {<Portfolio/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      <Footer/>

    </div>
  );
}

export default App;
