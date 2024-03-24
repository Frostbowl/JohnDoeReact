import {Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import Nav from './pages/header/Nav';
import Home from './pages/main/Home';
import Portfolio from './pages/main/Portfolio.jsx';
import Footer from './pages/footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='portfolio' element= {<Portfolio/>}/>
        </Routes>
      <Footer/>

    </div>
  );
}

export default App;
