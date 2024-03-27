import './Service.css';
import React from 'react';

const Service = () =>{
    return(
        <main>
            <div className='serviceBg'></div>

            <div className='titreService text-center p-3 border-bottom border-primary border-4'>
                <h1 className='text-uppercase'>mon offre de services</h1>
                <p>Voici les prestations sur lesquelles je peux intervenir</p>
            </div>

            <div className='container pt-4 mt-4'>
                <div className='row g-1'>

                <div className="col-md-4 col-xl-4 ">
                    <div className='card uxd text-center mb-1 p-5'>
                    <i className="fa-solid uxdI fa-desktop fa-2xl p-5"></i>
                    <h2 className='text-uppercase card-title'>ux design</h2>
                    <p className='card-text pb-4'>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. 
                    Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                    </div>
                </div>

                <div className="col-md-4 col-xl-4 ">
                    <div className='card dvw text-center p-5'>
                    <i className="fa-solid fa-file-code fa-2xl p-5"></i>
                    <h2 className='text-uppercase card-title'>développement web</h2>
                    <p className='card-text pb-4'>le<strong> développement de sites web</strong> repose sur l'utilisation des langages 
                     <span className=' dotted-border'> html</span>, <span className=' dotted-border'>css</span>,
                     JavaScript et <span className=' dotted-border'>php</span>.</p>
                    </div>
                </div>

                <div className="col-md-4 col-xl-4 ">
                    <div className='card ref text-center p-5'>
                    <i className="fa-solid fa-magnifying-glass-dollar fa-2xl p-5"></i>
                    <h2 className='text-uppercase card-title'>référencement</h2>
                    <p className='card-text pb-4'>Le<strong> référencement naturel d'un site,</strong> aussi appelé 
                    <span className='dotted-border'> seo,</span> consiste à mettre des techniques en oeuvre pour
                    <span className='fst-italic'> améliorer sa position</span> dans les résultats des moteurs de recherche.</p>
                    </div>
                </div>

                </div>
            </div>

        </main>
    )
}

export default Service;