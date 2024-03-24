import {Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import Nav from './pages/header/Nav';
import Home from './pages/main/Home';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
        </Routes>
      <Footer/>

    </div>
  );
}

export default App;
