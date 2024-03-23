import React from 'react';
import {Link} from 'react-router-dom';
import "./Home.css";

const Home = () =>{
    return (
        <main>
            <div className='fond'>
                <div id="welcomeText">
                    <h1>Bonjour, je m'appel Clément Masclet</h1>
                    <h2>Développeur Web full stack</h2>
                    <button type='button' class='btn btn-primary'>En savoir plus</button>
                </div>
            </div>

            <section >
                    <div  className="container-fluid row box-about">
                        <article className='col-md-6 '>
                            <h2>A propos</h2>
                            <p>Passioné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur Web</strong> au CEF.
                                Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web.</strong><br /><br />
                                Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong><br /><br />
                                J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
                            </p>
                        </article>
                        <article className='col-md-6'>
                            <img src="../img/john-doe-about.jpg" alt="John Doe" />
                            <h2>Mes compétences</h2>
                            <p>HTML5 90%</p>
                            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-danger" style= {{width: "90%"}}></div>
                            </div><br />
                            <p class="">CSS3 80%</p>
                            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-info" style= {{width: "80%"}}></div>
                            </div><br />
                            <p>JAVASCRIPT 70%</p>
                            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-warning" style= {{width: "70%"}}></div>
                            </div><br />
                            <p>PHP 60%</p>
                            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-success" style= {{width: "60%"}}></div>
                            </div><br />
                            <p>REACT 50%</p>
                            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar" style= {{width: "50%"}}></div>
                            </div>
                        </article>                    
                    </div>
            </section>
        </main>
    )
}

export default Home;