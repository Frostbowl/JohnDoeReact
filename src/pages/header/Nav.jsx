import React from 'react';
import {Link} from 'react-router-dom';
import "./Nav.css";


const Nav = () =>{
    return(
		<nav class="navbar navbar-expand-lg font-weight-bold text-light text-uppercase fixed-top" id="mainNav">
            <div class="container-fluid">
                <Link to='/' class="navbar-brand text-light font-weight-bold" >Clément MASCLET</Link>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto text-white">
                        <li class="nav-item mx-0 mx-lg-1"><Link to='/' class="nav-link py-3 px-0 px-lg-3 rounded text-white" >Accueil</Link></li>
                        <li class="nav-item mx-0 mx-lg-1"><Link to='/' class="nav-link py-3 px-0 px-lg-3 rounded text-white" >Services</Link></li>
                        <li class="nav-item mx-0 mx-lg-1"><Link to='/' class="nav-link py-3 px-0 px-lg-3 rounded text-white" >Réalisations</Link></li>
                        <li class="nav-item mx-0 mx-lg-1"><Link to='/' class="nav-link py-3 px-0 px-lg-3 rounded text-white" >Blog</Link></li>
                        <li class="nav-item mx-0 mx-lg-1"><Link to='/' class="nav-link py-3 px-0 px-lg-3 rounded text-white" >Me contacter</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;