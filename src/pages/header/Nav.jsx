import React from 'react';
import {Link} from 'react-router-dom';
import "./Nav.css";


const Nav = () =>{
    
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    return(
		<nav variant="pills" activeKey="1" onSelect={{handleSelect}} className="navbar navbar-expand-lg  font-weight-bold text-light text-uppercase bg-dark " id="mainNav">
            <div className="container-fluid" >
                <Link to='/' className="navbar-brand text-light text-uppercase font-weight-bold" >Clément MASCLET</Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ms-auto " >
                        <li className="nav-item mx-0 mx-lg-1"><Link to='/' eventKey="1" className="nav-link active py-3 px-0 px-lg-3 text-white "  >Accueil</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link to='/service' eventKey="2" className="nav-link py-3 px-0 px-lg-3  text-white" >Services</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link to='/portfolio' eventKey="3" className="nav-link py-3 px-0 px-lg-3  text-white" >Réalisations</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link to='/blog' eventKey="4" className="nav-link py-3 px-0 px-lg-3  text-white" >Blog</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link to='/contact' eventKey="5" className="nav-link py-3 px-0 px-lg-3  text-white" >Me contacter</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;