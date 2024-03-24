import React from 'react';
import {Link} from 'react-router-dom';
import "./Portfolio.css";


const Portfolio = () =>{
    return(
        <main>
            <div className='portfolioBg'>
            </div>
            <div className='titrePortfolio text-center'>
                <h1>Mes créations</h1>
                <img src="../../../public/img/portfolio/espace-bien-etre.jpg%" alt="" />
                <h2>Voici quelques unes de mes créations</h2>
            </div>

            <div className='container creations'>
            <div className='row text-center'>
                <div class="card " style={{width: "18rem"}}>
                    <img src='../../../public/img/portfolio/espace-bien-etre.jpg' alt="" />
                    <div class="card-body">
                        <h4 class="card-title">Freh food</h4>
                        <p class="card-text">Réalisation d'un site avec commande en ligne.</p>
                        <a href="#" class="btn btn-outline-primary">voir</a>
                     </div>
                    <div>
                        <p className='techSpec'>Site réalisé avec PHP et MySQL</p>
                    </div>
                </div>

                <div class="card" style={{width: "18rem"}}>
                    <img src='../../../public/img/portfolio/espace-bien-etre.jpg' alt="" />
                    <div class="card-body">
                        <h4 class="card-title">Restaurant Akira</h4>
                        <p class="card-text">Réalisation d'un site vitrine</p>
                        <a href="#" class="btn btn-outline-primary">voir</a>
                     </div>
                    <div>
                        <p className='techSpec'>Site réalisé avec WordPress</p>
                    </div> 
                </div>
                
                <div class="card " style={{width: "18rem"}}>
                    <img src='../../../public/img/portfolio/espace-bien-etre.jpg' alt="" />
                    <div class="card-body ">
                        <h4 class="card-title">Espace bien-être</h4>
                        <p class="card-text">Réalisation d'un site vitrine pour un praticien de bien-être</p>
                        <a href="#" class="btn btn-outline-primary">voir</a>
                     </div>
                    <div>
                        <p className='techSpec'>Site réalisé en HTML/CSS</p>
                    </div>
                </div>
                </div>   
            </div>


        </main>
    )
}

export default Portfolio;