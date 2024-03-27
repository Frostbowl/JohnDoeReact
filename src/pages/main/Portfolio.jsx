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
                <div className="row  ">
                
                    <div className="col-md-5 col-xl-4 px-3 py-4">
                        <div className="card" >
                            <img src="../img/portfolio/fresh-food.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">Fresh food</h3>
                                <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
                                <a href="#" className="btn btn-outline-primary">voir</a>
                            </div>
                            <div>
                                <p className='card-footer m-0'>Site réalisé en HTML/CSS</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 col-xl-4 px-3 py-4">
                        <div className="card">
                            <img src="../img/portfolio/restaurant-japonais.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">Restaurant Akira</h3>
                                <p className="card-text">Réalisation d'un site vitrine</p>
                                <a href="#" className="btn btn-outline-primary">voir</a>
                            </div>
                            <div>
                                <p className='card-footer m-0'>Site réalisé en HTML/CSS</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 col-xl-4 px-3 py-4">
                        <div className="card">
                            <img src="../img/portfolio/espace-bien-etre.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h3 className="card-title">Espace bien-être</h3>
                                <p className="card-text">Réalisation d'un site vitrine pour un praticien de bien-être</p>
                                <a href="#" className="btn btn-outline-primary">voir</a>
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