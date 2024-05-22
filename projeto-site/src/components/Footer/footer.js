import 'react-whatsapp-widget/dist/index.css';
import email from '../../img/e-mail.png';
import mapa from '../../img/icon-mapa.png';
import youtube from '../../img/youtube.png';
import logo from '../../img/logo-escuro.png';
import facebook from '../../img/facebook.png';
import telefone from '../../img/telefone.png';
import whatsapp from '../../img/whatsapp.png';
import instagram from '../../img/instagram.png';

function Footer({ id }) {

  return (
    <div className="App" id={id}>
      <footer className="App-footer">
        <div className="contact-content">
          <div class="contact-logo">
            <img className="logo-image-contact" src={logo} alt="Logo da Arte Vieira" />
          </div>
          <div className="navigation-menu">
            <ul class="navigation-menu-list">
              <li className="menu__item-footer"><a href="#cardImage" className="menu__link" >Home</a></li>
              <li className="menu__item-footer"><a href="#about" className="menu__link">Quem Somos</a></li>
              <li className="menu__item-footer"><a href="#carousel" className="menu__link">Eventos</a></li>
              <li className="menu__item-footer"><a href="#budget" className="menu__link">Solicitar Orçamento</a></li>
              <li className="menu__item-footer"><a href="#contact" className="menu__link">Contato</a></li>
            </ul>
          </div>
          <div className="social-media-contacts">
            <ul className="social-media-icons">
              <p>Siga nossas Redes Sociais</p>
              <li class="social-media-contact">
                <a href="https://www.instagram.com/artevieira/" class="icon-instagram"><img className="social-media-logo" src={instagram} alt="instagram" /></a>
                <a href="https://www.facebook.com/ArteVieiraEventos" class="icon-facebook"><img className="social-media-logo" src={facebook} alt="facebook" /></a>
                <a href="https://www.youtube.com/@Artevieiracoquetelaria" class="icon-youtube"><img className="social-media-logo logo-youtube" src={youtube} alt="youtube" /></a>
              </li>
            </ul>
          </div>
          <div className="email-address-numbers">
            <p><img src={whatsapp} alt="img de um telefone" />(11) 95968-0087</p>
            <p><img src={telefone} alt="img de um telefone" />(11) 3294-6448</p>
            <p className="email"><img src={email} alt="img de um icone de email" />contato@artevieira.com</p>
            <p className="address"><img src={mapa} alt="img de um icone de marcador de mapa" />Alameda Afonso Bocchiglieri, 327
              Vila Arriete, São Paulo–SP</p>
          </div>
        </div>
        <p className="footer__text text-center">COPYRIGHT © 2024 | ARTE VIEIRA EVENTOS | TODOS OS DIREITOS RESERVADOS.</p>
      </footer>
    </div>
  );
}

export default Footer;
