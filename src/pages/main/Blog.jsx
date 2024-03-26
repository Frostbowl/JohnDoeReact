import React from 'react';
import './Blog.css';
const Blog = () =>{
    return(
        <main>
        <div className='blogBg'></div>
            
            <div className='titreBlog'>
                <div className='text-center p-3 border-bottom border-primary border-4'>
                    <h1 className='text-uppercase'>blog</h1>
                    <h2>Retrouvez ici quelques articles sur le développement web</h2>
                </div>
            </div>

            <div className='container'>
                <div className="row ">

                    <div class="col-md-5 col-xl-4 px-3 py-4">
                            <div class="card" >
                                <img src="../img/blog/coder.jpg" class="card-img-top" alt="Des lignes de code"/>
                                <div class="card-body">
                                    <h3 class="card-title">Coder son site en HTML/CSS</h3>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content</p>
                                    <a href="#" class="btn btn-primary">Lire la suite</a>
                                </div>
                                <div>
                                    <p className='card-footer m-0'>Publié le 22 août 2022</p>
                                </div>
                            </div>
                    </div>

                    <div class="col-md-5 col-xl-4 px-3 py-4">
                            <div class="card" >
                                <img src="../img/blog/croissance.jpg" class="card-img-top" alt="Des lignes de code"/>
                                <div class="card-body">
                                    <h3 class="card-title">Vendre ses produits sur le web</h3>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content</p>
                                    <a href="#" class="btn btn-primary">Lire la suite</a>
                                </div>
                                <div>
                                    <p className='card-footer m-0'>Publié le 20 août 2022</p>
                                </div>
                            </div>
                    </div>

                    <div class="col-md-5 col-xl-4 px-3 py-4">
                            <div class="card" >
                                <img src="../img/blog/google.jpg" class="card-img-top" alt="Des lignes de code"/>
                                <div class="card-body">
                                    <h3 class="card-title">Se positionner sur Google</h3>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content</p>
                                    <a href="#" class="btn btn-primary">Lire la suite</a>
                                </div>
                                <div>
                                    <p className='card-footer m-0'>Publié le 01 août 2022</p>
                                </div>
                            </div>
                    </div>

                    <div class="col-md-5 col-xl-4 px-3 py-4">
                            <div class="card" >
                                <img src="../img/blog/screens.jpg" class="card-img-top" alt="Des lignes de code"/>
                                <div class="card-body">
                                    <h3 class="card-title">Coder en responsive design</h3>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content</p>
                                    <a href="#" class="btn btn-primary">Lire la suite</a>
                                </div>
                                <div>
                                    <p className='card-footer m-0'>Publié le 31 juillet 2022</p>
                                </div>
                            </div>
                    </div>

                    <div class="col-md-5 col-xl-4 px-3 py-4">
                            <div class="card" >
                                <img src="../img/blog/seo.jpg" class="card-img-top" alt="Des lignes de code"/>
                                <div class="card-body">
                                    <h3 class="card-title">Techniques de référencement</h3>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content</p>
                                    <a href="#" class="btn btn-primary">Lire la suite</a>
                                </div>
                                <div>
                                    <p className='card-footer m-0'>Publié le 30 juillet 2022</p>
                                </div>
                            </div>
                    </div>

                    <div class="col-md-5 col-xl-4 px-3 py-4">
                            <div class="card" >
                                <img src="../img/blog/technos.png" class="card-img-top" alt="Des lignes de code"/>
                                <div class="card-body">
                                    <h3 class="card-title">Apprendre à coder</h3>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content</p>
                                    <a href="#" class="btn btn-primary">Lire la suite</a>
                                </div>
                                <div>
                                    <p className='card-footer m-0'>Publié le 12 juillet 2022</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default Blog;