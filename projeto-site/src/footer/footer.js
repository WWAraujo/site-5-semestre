/* eslint-disable jsx-a11y/anchor-is-valid */
import '../App.css';
import 'react-whatsapp-widget/dist/index.css';
import facebook from '../imagem/facebook.png';
import instagram from '../imagem/instagram.png';
import youtube from '../imagem/youtube.png';
import logo from '../imagem/logo-escuro.png';
import telefone from '../imagem/telefone.png';
import whatsapp from '../imagem/whatsapp.png';
import mapa from '../imagem/icon-mapa.png';
import email from '../imagem/e-mail.png';

function Footer({id}) {
  const handleNavItemClick = (sectionId,event) => {
    if(event){
      event.preventDefault();
    }
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'auto',
        top: section.offsetTop
      });
    }
  };

  return (
    <div className="App" id={id}>
      <footer className="App-footer">
        <div className="contact-content">
          <div class="contact-logo">
            <img className="logo-image-contact" src={logo} alt="Logo da Arte Vieira" />
          </div>
          <div className="navigation-menu">
            <ul class="navigation-menu-list">
            <li className="menu__item"><a href="#cardImage" className="menu__link" onClick={(e) => handleNavItemClick('cardImage', e)}>Home</a></li>
            <li className="menu__item"><a href="#about" className="menu__link" onClick={(e) => handleNavItemClick('about', e)}>Quem Somos</a></li>
            <li className="menu__item"><a href="#carousel" className="menu__link" onClick={(e) => handleNavItemClick('carousel', e)}>Eventos</a></li>
            <li className="menu__item"><a href="#" className="menu__link">Solicitar Orçamento</a></li>
            <li className="menu__item"><a href="#contato" className="menu__link" onClick={(e) => handleNavItemClick('contact', e)}>Contato</a></li>
            </ul>
          </div>
          <div className="contacts">
            <div className="email-address-numbers">
              <p className="email"><img src={email} alt="imagem de um icone de email" />contato@artevieira.com</p>
              <p className="address"><img src={mapa} alt="imagem de um icone de marcador de mapa" />Alameda Afonso Bocchiglieri, 327
                Vila Arriete, São Paulo – SP</p>
              <p><img src={telefone} alt="imagem de um telefone" />(11) 3294-6448</p>
              <p><img src={whatsapp} alt="imagem de um telefone" />(11) 95968-0087</p>
            </div>
            <ul className="social-media-icons">
              <p>Redes Sociais</p>
              <li class="social-media-contact">
                <a href="https://www.instagram.com/artevieira/" class="icon-instagram"><img className="social-media-logo" src={instagram} alt="instagram" /></a>
                <a href="https://www.facebook.com/ArteVieiraEventos" class="icon-facebook"><img className="social-media-logo" src={facebook} alt="facebook" /></a>
                <a href="https://www.youtube.com/@Artevieiracoquetelaria" class="icon-youtube"><img className="social-media-logo logo-youtube" src={youtube} alt="youtube" /></a>
              </li>

            </ul>
          </div>
        </div>
        <p className="footer__text text-center">COPYRIGHT © 2024 | ARTE VIEIRA EVENTOS | TODOS OS DIREITOS RESERVADOS.</p>
      </footer>
    </div>
  );
}

export default Footer;
