import React from 'react';
import './Contact.css';
import Nav from '../header/Nav';
import Footer from '../footer/Footer.jsx';

const Contact = () =>{
    return(
            <div className='App'>
            <Nav/>
            <div className='contactBg p-4'>
                <form className='container p-5'>
                    <div className='contactTitle text-center'>
                        <h1 className='text-uppercase'>me contacter</h1>
                        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    </div>
                    <div className='container row'>
                        
                        <div className='row col-xl-6 col-md-6'>
                            <h2 className='formTitle'>Formulaire de contact</h2>
                            <label For="name"></label>
                            <input type="text" name="name" id="name" placeholder='Votre nom' required/>
                            <label for="mail"></label>
                            <input type='text' name='email' id='email' placeholder='Votre adresse email' required/>
                            <label for="phone"></label>
                            <input type="text" name="phone" id="phone" placeholder='Votre numéro de téléphone' required/>
                            <label for="subject"></label>
                            <input type="text" name='subject' id='subject' placeholder='Sujet' required/>
                            <label for="message"></label>
                            <textarea type="textarea" name='message' id='message' placeholder='Votre message' rows='4' required/>      
                            <div className='formBtn text-center p-4'>                   
                            <button type='submit' className='btn btn-primary'>Envoyer</button>
                            </div>   
                        </div>
                        
                        <div className='row col-xl-6 col-md-6'>
                            <h2 className='localTitle'>Mes coordonnées</h2>
                            <address>
                            <i className="fa-solid fa-location-dot"></i> 40 Rue Laure Diebold, 69009 Lyon, France <br />
                            <i className="fa-light fa-mobile"></i> 06 20 30 40 50
                            </address>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754105!2d4.796403976619976!3d45.77866571240149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1711476683785!5m2!1sfr!2sfr" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </form>
            </div>
        <Footer/>
            </div>
    )
}

export default Contact;