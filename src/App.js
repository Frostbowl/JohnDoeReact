import {Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import Home from './pages/main/Home';
import Portfolio from './pages/main/Portfolio.jsx';
import Blog from './pages/main/Blog.jsx';
import Service from './pages/main/Service.jsx';
import Contact from './pages/main/Contact.jsx';
import Mention from './pages/main/Mention.jsx';
import AppGitHub from './pages/GitHub/UserInfo.jsx';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/home' element= {<Home/>}/>
          <Route path='/portfolio' element= {<Portfolio/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/mention' element={<Mention/>}/>
          <Route path='/github' element={<AppGitHub/>}/>
        </Routes>
    </div>
  );
}

export default App;
