import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () =>{
    return(
        <footer >
            <div className='container liens'>
                <div className='row'>
                <article className='col-md-3'>
                    <h4>John Doe</h4>
                    <address>
                        40 Rue Laure Diebold <br />
                        69009 Lyon, France <br />
                        Téléphone : 06 20 30 40 50
                        
                    <i className="fa-brands fa-square-twitter"></i>
                    
                    </address>
                    <div className='Container social'>
                    <a href='https://linkedin.com' target='_blank'><i className="fa-brands fa-linkedin fa-2xl"></i></a>
                    <a href='https://github.com' target='_blank'><i className="fa-brands fa-github fa-2xl"></i></a>
                    <a href='https://twitter.com' target='_blank'><i className="fa-brands fa-twitter fa-2xl"></i></a><br />
                    <a href="github" target="_blank" >Informations GitHub</a>
                    </div>
                </article>

                <article className='col-md-3'>
                    <h4>Liens utiles</h4>
                    <Link to='/'><i className="fa-solid fa-chevron-right" style={{color: "#0d6efd"}}></i> Accueil</Link><br />
                    <Link to='/'><i className="fa-solid fa-chevron-right" style={{color: "#0d6efd"}}></i> A propos</Link><br />
                    <Link to='/service'><i className="fa-solid fa-chevron-right" style={{color: "#0d6efd"}}></i> Services</Link><br />
                    <Link to='/contact'><i className="fa-solid fa-chevron-right" style={{color: "#0d6efd"}}></i> Me contacter</Link><br />
                    <Link to='/mention'><i className="fa-solid fa-chevron-right" style={{color: "#0d6efd"}}></i> Mentions légales</Link><br />
                </article>

                <article className='col-md-3'>
                    <h4>Mes dernières réalisations</h4>
                    <Link to='/portfolio'><i className="fa-solid fa-chevron-right" style={{color: "#0d6efd"}}></i> Fresh Food</Link><br />
                    <Link to='/portfolio'><i className="fa-solid fa-chevron-right" style={{color: "#0d6efd"}}></i> Restaurant Akira</Link><br />
                    <Link to='/portfolio'><i className="fa-solid fa-chevron-right" style={{color: "#0d6efd"}}></i> Espace bien-être</Link><br />
                </article>

                <article className='col-md-3'>
                    <h4>Mes dernièrs articles</h4>
                    <Link to='/blog'><i className="fa-solid fa-chevron-right" style={{color: "#0d6efd"}}></i> Coder son site en HTML/CSS</Link><br />
                    <Link to='/blog'><i className="fa-solid fa-chevron-right" style={{color: "#0d6efd"}}></i> Vendre ses produits sur le web</Link><br />
                    <Link to='/blog'><i className="fa-solid fa-chevron-right" style={{color: "#0d6efd"}}></i> Se positionner sur Google</Link><br />

                </article>
                </div>
            </div>
            <div className="copyright">
                &copy; Designed by <a href="#" className='text-white'>Clément Masclet</a>
            </div>
        </footer>
    )
}

export default Footer;