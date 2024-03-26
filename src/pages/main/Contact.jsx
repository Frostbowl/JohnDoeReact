import React from 'react';
import './Contact.css';

const Contact = () =>{
    return(
        <main>
            <div className='contactBg p-4'>
                <form className='container p-5'>
                    <div className='contactTitle text-center'>
                        <h1 className='text-uppercase'>me contacter</h1>
                        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    </div>
                    <div className='container'>
                        <div className='row col-xl-6'>
                            <h2>Formulaire de contact</h2>
                            <label For="name"></label>
                            <input type="text" name="name" id="name" placeholder='Votre nom'/>
                            <label for="mail"></label>
                            <input type='text' name='email' id='email' placeholder='Votre adresse email' />
                            <label for="phone"></label>
                            <input type="text" name="phone" id="phone" placeholder='Votre numéro de téléphone' />
                            <label for="subject"></label>
                            <input type="text" name='subject' id='subject' placeholder='Sujet' />
                            <label for="message"></label>
                            <textarea type="textarea" name='message' id='message' placeholder='Votre message' rows='4' />
                        </div>
                        <div className='row'>

                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Contact;