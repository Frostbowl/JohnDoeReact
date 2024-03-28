import React from 'react';
import {Link} from 'react-router-dom';
import Nav from '../header/Nav';
import Footer from '../footer/Footer.jsx';
import "./Home.css";

const Home = () =>{
    return (
        <div className='App'>
            <Nav/>
        <main>
            <div className='fond '>
                <div id="welcomeText">
                    <h1>Bonjour, je suis Clément Masclet</h1><br />
                    <h2>Développeur Web full stack</h2><br />
                    <button type='button'  className='btn btn-primary'><a href="#propos">En savoir plus</a></button>
                </div>
            </div>

            <section className='container apropos' id='propos'>
                    <div  className=" row ">
                        <article className='col-md-6 '>
                            <h2 className="titre">A propos</h2>
                            <p>Passioné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur Web</strong> au CEF.
                                Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web.</strong><br /><br />
                                Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong><br /><br />
                                J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
                            </p>
                        </article>
                        <article className='col-md-6'>
                            <div className='container'>
                            <img src="../img/john-doe-about.jpg" alt="John Doe" />
                            <h2>Mes compétences</h2>
                            <p>HTML5 90%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-danger" style= {{width: "90%"}}></div>
                            </div><br />
                            <p className="">CSS3 80%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info" style= {{width: "80%"}}></div>
                            </div><br />
                            <p>JAVASCRIPT 70%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-warning" style= {{width: "70%"}}></div>
                            </div><br />
                            <p>PHP 60%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-success" style= {{width: "60%"}}></div>
                            </div><br />
                            <p>REACT 50%</p>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style= {{width: "50%"}}></div>
                            </div>
                            </div>
                        </article>                    
                    </div>
            </section>
        </main>
        <Footer/>
        </div>
    )
}

export default Home;