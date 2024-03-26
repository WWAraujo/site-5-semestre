import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import imagem1 from '../imagem/Img 01 Carrossel.jpeg'
import imagem2 from '../imagem/Img 02 Carrossel.jpeg'
import imagem3 from '../imagem/Img 03 Carrossel.jpeg'
import imagem4 from '../imagem/Img 04 Carrossel.jpeg'
import imagem5 from '../imagem/Img 05 Carrossel.jpeg'

function Carousel() {
    useEffect(() => {
        new Swiper('.swiper-container', {
            direction: 'horizontal',
            autoheight: true,
            loop: true,
            autoplay: {
                delay: 4000,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true
            }
        });
    }, []);

    return (

        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="App-content-caroussel">
                        <img className="App-image" src={imagem1} alt="Imagem 1 Carossel" />
                        <div className="App-content-text-carousel">
                            <h1 className="title-slide">Titulo</h1>
                            <p className="text-slide">Texto</p>
                        </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <div className="swiper-slide">
                    <div className="App-content-caroussel">
                        <img className="App-image" src={imagem2} alt="Imagem 2 Carossel" />
                        <div className="App-content-text-carousel">
                            <h1 className="title-slide">Titulo</h1>
                            <p className="text-slide">Texto</p>
                        </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <div className="swiper-slide">
                    <div className="App-content-caroussel">
                        <img className="App-image" src={imagem3} alt="Imagem 3 Carossel" />
                        <div className="App-content-text-carousel">
                            <h1 className="title-slide">Titulo</h1>
                            <p className="text-slide">Texto</p>
                        </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <div className="swiper-slide">
                    <div className="App-content-caroussel">
                        <img className="App-image" src={imagem4} alt="Imagem 4 Carossel" />
                        <div className="App-content-text-carousel">
                            <h1 className="title-slide">Titulo</h1>
                            <p className="text-slide">Texto</p>
                        </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <div className="swiper-slide">
                    <div className="App-content-caroussel">
                        <img className="App-image" src={imagem5} alt="Imagem 5 Carossel" />
                        <div className="App-content-text-carousel">
                            <h1 className="title-slide">Titulo</h1>
                            <p className="text-slide">Texto</p>
                        </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <div className="swiper-pagination"></div>
            </div>




        </div>

    )
}

export default Carousel;