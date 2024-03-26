import React from 'react';
import "./Portfolio.css";


const Portfolio = () =>{
    return(
        <main>
            <div className='portfolioBg'></div>
            
            <div className='titrePortfolio'>
                <div className='text-center p-3 border-bottom border-primary border-4'>
                    <h1 className='text-uppercase'>portfolio</h1>
                    <h2>Voici quelques-unes de mes réalisations</h2>
                </div>
            </div>

            <div className='container text-center'>
                <div class="row  ">
                
                    <div class="col-md-5 col-xl-4 px-3 py-4">
                        <div class="card" >
                            <img src="../img/portfolio/fresh-food.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h3 class="card-title">Fresh food</h3>
                                <p class="card-text">Réalisation d'un site avec commande en ligne.</p>
                                <a href="#" class="btn btn-outline-primary">voir</a>
                            </div>
                            <div>
                                <p className='card-footer m-0'>Site réalisé en HTML/CSS</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 col-xl-4 px-3 py-4">
                        <div class="card">
                            <img src="../img/portfolio/restaurant-japonais.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h3 class="card-title">Restaurant Akira</h3>
                                <p class="card-text">Réalisation d'un site vitrine</p>
                                <a href="#" class="btn btn-outline-primary">voir</a>
                            </div>
                            <div>
                                <p className='card-footer m-0'>Site réalisé en HTML/CSS</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-5 col-xl-4 px-3 py-4">
                        <div class="card">
                            <img src="../img/portfolio/espace-bien-etre.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h3 class="card-title">Espace bien-être</h3>
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