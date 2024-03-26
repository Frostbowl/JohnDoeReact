import React from 'react';
import './Mention.css';

const Mention =()=>{
    return(
        <main className='mentions'>
            <div className='text-center text-uppercase'>
                <h1>mentions légales</h1>
            </div>
            <div class="accordion " id="accordionExample">

                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Editeur du site
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h1>Masclet Clément</h1>
                            <address>
                            <i className="fa-solid fa-location-dot"></i> 40 Rue Laure Diebold <br />
                            69009 Lyon, France <br />
                            <i className="fa-solid fa-mobile-screen"></i> <a href="tel:+">06 20 30 40 50</a> <br />
                            <i className="fa-solid fa-envelope"></i> <a href="mailto:">john.doe@gmail.com</a>

                            </address>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h1>Nom de l'hébergeur</h1>
                                <address>
                                    Adresse de l'hébergeur <br />
                                    code postal <br />
                                    <a href="http://www.alwaysdata.com" target="_blank" >www.alwaysdata.com</a>
                                </address>
                            </div>
                        </div>
                </div>

                <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Crédits
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h1>Crédits</h1>
                                <p>Site développé par Masclet Clément, étudiant du CEF.</p>
                                <p>Les images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank" style={{color:"#0d6efd"}}>Pixabay</a></p>
                            </div>
                        </div>
                </div>
            </div>
        </main>
    )
}

export default Mention;