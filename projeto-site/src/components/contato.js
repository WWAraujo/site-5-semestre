/* eslint-disable jsx-a11y/anchor-is-valid */
import facebook from '../imagem/facebook.png';
import instagram from '../imagem/instagram.png';
import youtube from '../imagem/youtube.png';
import logo from '../imagem/logo-escuro.png';
import telefone from '../imagem/telefone.png';
import whatsapp from '../imagem/whatsapp.png';
import mapa from '../imagem/icon-mapa.png';
import email from '../imagem/e-mail.png';

function contato() {
    return (
        <section className="container-contato">
            <h1 className="title-contato">Contato</h1>
            <div className="contact-content">
                <div class="contact-logo">
                    <img className="logo-image-contact" src={logo} alt="Logo da Arte Vieira" />
                </div>
                <div className="address-email-container">
                    <p className="email"><img src={email} alt="imagem de um icone de email" />contato@artevieira.com</p>
                    <p className="address"><img src={mapa} alt="imagem de um icone de marcador de mapa" />Alameda Afonso Bocchiglieri, 327
                        Vila Arriete, São Paulo – SP</p>
                </div>
                <div className="contacts">
                    <div className="number-contacts">
                        <p><img src={telefone} alt="imagem de um telefone" />(11) 3294-6448</p>
                        <p><img src={whatsapp} alt="imagem de um telefone" />(11) 95968-0087</p>
                    </div>
                    <ul className="social-media-icons">
                        <p>Redes Sociais</p>
                        <li class="social-media-contact">
                            <a href="#" class="icon-instagram"><img className="social-media-logo" src={instagram} alt="instagram" /></a>
                            <a href="#" class="icon-facebook"><img className="social-media-logo" src={facebook} alt="facebook" /></a>
                            <a href="#" class="icon-youtube"><img className="social-media-logo logo-youtube" src={youtube} alt="youtube" /></a>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default contato;