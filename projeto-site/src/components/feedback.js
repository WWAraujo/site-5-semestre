import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import Avaliacao from '../imagem/avaliacao.png';
import Google from '../imagem/pesquisa.png';

function Feedback({ id }) {

    const card1 = "Serviço excelente, ótimo e de boa qualidade. Já fechei mais de 20 eventos e super indico. Parabéns e sucessas."
    const card2 = "Contratei o serviço da arte vieira para o meu casamento e digo com toda a certeza que foi o melhor bar de casamento que ja fui. As bebidas estavam sensacionais, recebi muitos elogios das bebidas e dos barmans que foram super simpáticos. Recomendo muito!"
    const card3 = "Profissionais muito atenciosos salvou a festa da nossa empresa, Drinks e atendimento perfeito Obrigado Arte Vieira recomendo sempre vocês."
    const card4 = "Ótima empresa!! muito profissional, clientes tratados com o maior carinho e trabalho excelente. Super recomendo!"
    const card5 = "SERVIÇO IMPECÁVEL. Todo o processo desde o contato inicial, degustação, contratação até o dia do evento, o atendimento foi EXCEPCIONAL."
    const card6 = "Foi ótimo o trabalho deles,na minha festa super indico, profissionais capacitados e as bebidas uma melhor que a outra."
    const card7 = "Foi o melhor bar de eventos da minha vida, eles foram perfeitos em cada detalhe do meu casamento, super recomendo ... super recomendo."
    const card8 = "Excelentes profissionais. Educados. Uniformizados. Com uma grande variedade de drinks . Super indico e recomendo. Paragevsya todos da arte Vieira."

    const swiper4Ref = useRef(null);
    const [selectedContent, setSelectedContent] = useState(card1);

    useEffect(() => {
        const swiper4 = new Swiper('.swiper-container3', {
            loop: false,
            slidesPerView: 5,
            freeMode: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });

        swiper4Ref.current = swiper4;
    }, [id]);

    const handleSlideClick = (content) => {
        setSelectedContent(content);
    };

    return (
        <section className="swiper swiper-container2" id={id}>
            <h1 className="feedback-title">Feedback Refrescante</h1>
            <div className="card" id="cards">
                <div className='avaliacao-icon'>
                    <img src={Avaliacao} alt="estrelas de avaliação" id="estrela" />
                    <div className="google-container">
                        <img src={Google} alt="estrelas de avaliação" id="google" />
                        <figcaption>Avaliação do Google</figcaption>
                    </div>
                </div>
                <span>{selectedContent}</span>
            </div>
            <div className="container-wrapper">
                <div className="swiper-container swiper-container3">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide swiper-slide3" id="feedback-divcontent" onClick={() => handleSlideClick(card1)}>
                            <div className={`content-feedback ${selectedContent === card1 ? 'active' : ''}`}>
                                <img src={Avaliacao} alt="estrelas de avaliação" />
                                <p>{card1}</p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide3" id="feedback-divcontent" onClick={() => handleSlideClick(card2)}>
                            <div className={`content-feedback ${selectedContent === card2 ? 'active' : ''}`}>
                                <img src={Avaliacao} alt="estrelas de avaliação" />
                                <p>{card2}</p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide3" id="feedback-divcontent" onClick={() => handleSlideClick(card3)}>
                            <div className={`content-feedback ${selectedContent === card3 ? 'active' : ''}`}>
                                <img src={Avaliacao} alt="estrelas de avaliação" />
                                <p>{card3}</p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide3" id="feedback-divcontent" onClick={() => handleSlideClick(card4)}>
                            <div className={`content-feedback ${selectedContent === card4 ? 'active' : ''}`}>
                                <img src={Avaliacao} alt="estrelas de avaliação" />
                                <p>{card4}</p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide3" id="feedback-divcontent" onClick={() => handleSlideClick(card5)}>
                            <div className={`content-feedback ${selectedContent === card5 ? 'active' : ''}`}>
                                <img src={Avaliacao} alt="estrelas de avaliação" />
                                <p>{card5}</p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide3" id="feedback-divcontent" onClick={() => handleSlideClick(card6)}>
                            <div className={`content-feedback ${selectedContent === card6 ? 'active' : ''}`}>
                                <img src={Avaliacao} alt="estrelas de avaliação" />
                                <p>{card6}</p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide3" id="feedback-divcontent" onClick={() => handleSlideClick(card7)}>
                            <div className={`content-feedback ${selectedContent === card7 ? 'active' : ''}`}>
                                <img src={Avaliacao} alt="estrelas de avaliação" />
                                <p>{card7}</p>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide3" id="feedback-divcontent" onClick={() => handleSlideClick(card8)}>
                            <div className={`content-feedback ${selectedContent === card8 ? 'active' : ''}`}>
                                <img src={Avaliacao} alt="estrelas de avaliação" />
                                <p>{card8}</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-button-prev" id="prev-feedback"></div>
                    <div className="swiper-button-next" id="next-feedback"></div>
                </div>
            </div>
        </section>
    );
}

export default Feedback;
