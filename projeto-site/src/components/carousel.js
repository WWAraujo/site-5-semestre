import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import Confraternização from '../imagem/Confraternização.jpeg';
import Casamento from '../imagem/Casamento.jpeg';
import Formatura from '../imagem/Formatura.jpeg';
import Aniversario from '../imagem/Aniversario.jpeg';
import VejaMais from '../imagem/VejaMais.png';

function Carousel({id}) {
    useEffect(() => {
        new Swiper('.swiper', {
            direction: 'horizontal',
            autoheight: true,
            loop: true,
            speed: 1500,
            parallax: true,
            autoplay: {
                delay: 3000,
                pauseOnMouseEnter: true,
            },
            effect: 'coverflow',
            coverflowEffect: {
                depth: 0,
                modifier: 0.2,
                rotate: 100,
                scale: 0,
                slideShadows: false,
                stretch: 20
            },
            controller: {
                effect: 'thumbs'
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
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
    }, []);

    return (

        <section className="swiper" id={id}>
            <h1 className="title-carousel">Eventos</h1>
            <div className="swiper-wrapper">
                <div className="swiper-slide container-slide">
                    <div className="App-content-carousel">
                        <img className="App-image" src={Confraternização} alt="Imagem 1 Carossel" id="imagecarousel1" />
                        <div className="App-content-text-carousel">
                            <h1 className="title-slide" data-swiper-parallax="-1000">Eventos Corporativos</h1>
                            <p className="text-slide" data-swiper-parallax="-500">Encantando nos eventos corporativos! Nossa equipe especializada em mixologia transforma cada momento empresarial em uma experiência inesquecível. Convide seus colegas para desfrutarem de coquetéis exclusivos, preparados com maestria, enquanto celebram conquistas e fortalecem vínculos profissionais.Descubra como podemos elevar seu evento corporativo a um novo nível de sofisticação e diversão.</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide container-slide">
                    <div className="App-content-carousel">
                        <img className="App-image" src={Casamento} alt="Imagem 2 Carossel" id="imagecarousel2" />
                        <div className="App-content-text-carousel">
                            <h1 className="title-slide" data-swiper-parallax="-1000">Casamento</h1>
                            <p className="text-slide" data-swiper-parallax="-500">Brinde ao amor eterno e às celebrações memoráveis! Em cada gole, uma promessa de momentos inesquecíveis. Neste dia especial, deixe nossos coquetéis tornarem cada brinde ainda mais mágico. Casamento é a celebração do amor, e nós estamos aqui para adocicar cada momento com o sabor da felicidade.</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide container-slide">
                    <div className="App-content-carousel">
                        <img className="App-image" src={Formatura} alt="Imagem 3 Carossel" id="imagecarousel3" />
                        <div className="App-content-text-carousel">
                            <h1 className="title-slide" data-swiper-parallax="-1000">Formatura</h1>
                            <p className="text-slide" data-swiper-parallax="-500">Os chapéus voam, os corações batem forte - é hora de celebrar! Este é o momento em que as lágrimas de esforço se transformam em sorrisos de conquista. E nós, da <strong>Arte Vieira</strong>, estamos aqui para tornar essa celebração ainda mais memorável! Deixe-nos adicionar um toque de elegância e sabor à sua festa de formatura. Cada gole é mais do que uma bebida; é uma experiência que marca o início de uma nova fase emocionante.</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide container-slide">
                    <div className="App-content-carousel">
                        <img className="App-image" src={Aniversario} alt="Imagem 4 Carossel" id="imagecarousel4" />
                        <div className="App-content-text-carousel">
                            <h1 className="title-slide" data-swiper-parallax="-1000">Aniversários</h1>
                            <p className="text-slide" data-swiper-parallax="-500">É hora de celebrar mais um ano de memórias, risadas e momentos inesquecíveis! Prepare-se para uma festa de aniversário cheia de sabor e diversão. Deixe-nos criar coquetéis que combinem perfeitamente com a alegria e a emoção deste dia especial. Cada gole é uma homenagem aos anos passados e aos que ainda estão por vir.</p>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide container-slide">
                    <div className="App-content-carousel front-card">
                        <img className="App-image" src={VejaMais} alt="Imagem 5 Carossel" id="imagecarousel5" />
                        <div className="App-content-text-carousel container-vejamais">
                            <h1 className="title-slide" data-swiper-parallax="-1000">Veja Mais!</h1>
                            <div className="content-vejamais" data-swiper-parallax="-300">
                                <ul>
                                    <li className='text-slide'>Festas Infantis</li>
                                    <li className='text-slide'>Confraternizações</li>
                                    <li className='text-slide'>Despedidas</li>
                                    <li className='text-slide'>e mais.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </section>

    )
}

export default Carousel;