/* eslint-disable jsx-a11y/anchor-is-valid */
import 'react-whatsapp-widget/dist/index.css';
import youtube from '../../img/youtube.png';
import logo from '../../img/logo-escuro.png';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import { Toggle } from './Toogle/Toogle';



function Header({ isLight, setIsLight }) {

  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      document.querySelector(".App-header").style.top = "-110px";
    } else {
      document.querySelector(".App-header").style.top = "0";
    }
    lastScrollTop = currentScroll;
  });

  return (
    <header className="App-header">
      <div className="header-logo">
        <a href="#">
          <img className="logo__image" src={logo} alt="Logo da Arte Vieira" />
        </a>
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
        <Toggle
          isChecked={isLight}
          handleChange={() => setIsLight(!isLight)}
        />

    </header>

  );
}

export default Header;
