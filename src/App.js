import {Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import Nav from './pages/header/Nav';
import Home from './pages/main/Home';

function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route path='/' element= {<Home/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
