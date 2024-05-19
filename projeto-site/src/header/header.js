/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../imagem/logo-escuro.png';
import facebook from '../imagem/facebook.png';
import instagram from '../imagem/instagram.png';
import youtube from '../imagem/youtube.png';
import '../App.css';
import 'react-whatsapp-widget/dist/index.css';



function Header() {

  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      // Rolando para baixo
      document.querySelector(".App-header").style.top = "-110px"; // Ajuste o valor conforme necessário
    } else {
      // Rolando para cima
      document.querySelector(".App-header").style.top = "0";
    }
    lastScrollTop = currentScroll;
  });

  return (
    <header className="App-header">
      <div className="header-logo">
        <img className="logo__image" src={logo} alt="Logo da Arte Vieira" />
      </div>
      <div className="container-header">
        <input type="checkbox" id="menu" className="container__button" />
        <label for="menu">
          <span className="burguer-menu__header container__image"></span>
        </label>
        <ul className="menu-list">
          <li className="menu-list-item">
            <a href="#cardImage" className="menu-list-link">Home</a>
          </li>
          <li className="menu-list-item">
            <a href="#about" className="menu-list-link">Quem Somos</a>
          </li>
          <li className="menu-list-item">
            <a href="#carousel" className="menu-list-link">Eventos</a>
          </li>
          <li className="menu-list-item">
            <a href="#budget" className="menu-list-link">Solicitar Orçamento</a>
          </li>
          <li className="menu-list-item">
            <a href="#contato" className="menu-list-link">Contato</a>
          </li>
          <li className="social-media">
            <a href="https://www.instagram.com/artevieira/" className="icon-instagram"><img className="logo-social-media" src={instagram} alt="instagram" /></a>
            <a href="https://www.facebook.com/ArteVieiraEventos" className="icon-facebook"><img className="logo-social-media" src={facebook} alt="facebook" /></a>
            <a href="https://www.youtube.com/@Artevieiracoquetelaria" className="icon-youtube"><img className="logo-social-media" src={youtube} alt="youtube" /></a>
          </li>
          <p>Siga Nossas redes sociais</p>
        </ul>
        <nav className="navigation">
          <ul className="menu-extensive">
            <li className="menu__item-header"><a href="#cardImage" className="menu__link" >Home</a></li>
            <li className="menu__item-header"><a href="#about" className="menu__link" >Quem Somos</a></li>
            <li className="menu__item-header"><a href="#carousel" className="menu__link">Eventos</a></li>
            <li className="menu__item-header"><a href="#budget" className="menu__link">Solicitar Orçamento</a></li>
            <li className="menu__item-header"><a href="#contact" className="menu__link" >Contato</a></li>
          </ul>
        </nav>
      </div>

    </header>

  );
}

export default Header;
