import React from 'react'
import Product from './product'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/home/menina-universo.jpg" class="d-block w-100" alt="Imagem menina camiseta universo" height="500px" />
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/home/camiseta-lobo-universo.jpg" class="d-block w-100" alt=" imagem camiseta lobo universo" height="500px" />
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/home/camiseta-universo-2.jpg" class="d-block w-100" alt="imagem camiseta gato universo" height="500px" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Próximo</span>
                </button>
            </div>
            <Product />
        </div>
    )
}

export default Home
