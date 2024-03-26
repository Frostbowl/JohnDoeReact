import React from 'react';
import {Link} from 'react-router-dom';
import "./Portfolio.css";


const Portfolio = () =>{
    return(
        <main>
            <div className='portfolioBg'>
            </div>
            <div className='titrePortfolio text-center '>
                <h1>Mes créations</h1>
                <h2>Voici quelques unes de mes créations</h2>
            </div>

            <div className='container text-center'>
                <div class="row  ">
                
                    <div class="col-md-5 col-xl-4 p-2">
                        <div class="card" >
                            <img src="..//img/portfolio/fresh-food.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Fresh food</h5>
                                <p class="card-text">Réalisation d'un site avec commande en ligne.</p>
                                <a href="#" class="btn btn-outline-primary">voir</a>
                            </div>
                            <div>
                                <p className='card-footer m-0'>Site réalisé en HTML/CSS</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 col-xl-4 p-2">
                        <div class="card">
                            <img src="../img/portfolio/restaurant-japonais.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Restaurant Akira</h5>
                                <p class="card-text">Réalisation d'un site vitrine</p>
                                <a href="#" class="btn btn-outline-primary">voir</a>
                            </div>
                            <div>
                                <p className='card-footer m-0'>Site réalisé en HTML/CSS</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 col-xl-4 p-2">
                        <div class="card">
                            <img src="../img/portfolio/espace-bien-etre.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Espace bien-être</h5>
                                <p class="card-text">Réalisation d'un site vitrine pour un praticien de bien-être</p>
                                <a href="#" class="btn btn-outline-primary">voir</a>
                            </div>
                            <div>
                                <p className='card-footer m-0'>Site réalisé en HTML/CSS</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </main>
    )
}

export default Portfolio;