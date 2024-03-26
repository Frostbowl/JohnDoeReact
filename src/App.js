import {Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import Nav from './pages/header/Nav';
import Home from './pages/main/Home';
import Portfolio from './pages/main/Portfolio.jsx';
import Blog from './pages/main/Blog.jsx';
import Footer from './pages/footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/portfolio' element= {<Portfolio/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      <Footer/>

    </div>
  );
}

export default App;
