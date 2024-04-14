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
        new Swiper('.swiper', {
            direction: 'horizontal',
            autoheight: true,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 3000,
                pauseOnMouseEnter: true,
            },
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 50,
                slideShadows: false
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination'
            },
        });
    }, []);

    return (

        <section className="swiper">
            <h1 className="title-carousel">Cartela de Drinks</h1>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="App-content-carousel">
                        <img className="App-image" src={imagem1} alt="Imagem 1 Carossel" id="imagecarousel1" />
                        <div className="App-content-text-carousel">
                            <h1 className="title-slide">Titulo</h1>
                            <p className="text-slide">TextoTextoTextoTextoTextoTextoTextoTextoTextoTexto</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="App-content-carousel">
                        <img className="App-image" src={imagem2} alt="Imagem 2 Carossel" id="imagecarousel2" />
                        <div className="App-content-text-carousel">
                            <h1 className="title-slide">Titulo</h1>
                            <p className="text-slide">TextoTextoTextoTextoTextoTextoTextoTextoTextoTexto</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="App-content-carousel">
                        <img className="App-image" src={imagem3} alt="Imagem 3 Carossel" id="imagecarousel3" />
                        <div className="App-content-text-carousel">
                            <h1 className="title-slide">Titulo</h1>
                            <p className="text-slide">TextoTextoTextoTextoTextoTextoTextoTextoTextoTexto</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="App-content-carousel">
                        <img className="App-image" src={imagem4} alt="Imagem 4 Carossel" id="imagecarousel4" />
                        <div className="App-content-text-carousel">
                            <h1 className="title-slide">Titulo</h1>
                            <p className="text-slide">TextoTextoTextoTextoTextoTextoTextoTextoTextoTexto</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="App-content-carousel">
                        <img className="App-image" src={imagem5} alt="Imagem 5 Carossel" id="imagecarousel5" />
                        <div className="App-content-text-carousel">
                            <h1 className="title-slide">Titulo</h1>
                            <p className="text-slide">TextoTextoTextoTextoTextoTextoTextoTextoTextoTexto</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div classname="swiper-pagination"></div>


        </section>

    )
}

export default Carousel;