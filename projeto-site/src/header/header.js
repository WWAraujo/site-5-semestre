/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../imagem/logo-escuro.png';
import facebook from '../imagem/facebook.png';
import instagram from '../imagem/instagram.png';
import youtube from '../imagem/youtube.png';
import '../App.css';
import 'react-whatsapp-widget/dist/index.css';

/**
 * Cabeçalho principal
 */
function Header() {
  return (
    <header className="App-header">
      <div class="header-logo">
        <img className="logo__image" src={logo} alt="Logo da Arte Vieira" />
      </div>
      <div class="container-header">
        <input type="checkbox" id="menu" class="container__button"/>
        <label for="menu">
          <span class="burguer-menu__header container__image"></span>
        </label>
        <ul class="menu-list">
          <li class="menu-list-item">
            <a href="#" class="menu-list-link">Home</a>
          </li>
          <li class="menu-list-item">
            <a href="#" class="menu-list-link">Quem Somos</a>
          </li>
          <li class="menu-list-item">
            <a href="#" class="menu-list-link">Eventos</a>
          </li>
          <li class="menu-list-item">
            <a href="#" class="menu-list-link">Solicitar Orçamento</a>
          </li>
          <li class="social-media">
            <a href="#" class="icon-instagram"><img className="logo-social-media" src={instagram} alt="instagram"/></a>
            <a href="#" class="icon-facebook"><img className="logo-social-media"src={facebook} alt="facebook"/></a>
            <a href="#" class="icon-youtube"><img className="logo-social-media"src={youtube} alt="youtube"/></a>
          </li>
          <p>Nossas redes sociais</p>
        </ul>
        <ul class="menu-extensive">
          <li class="menu__item"><a href="#" class="menu__link">Home</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Quem Somos</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Eventos</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Solicitar Orçamento</a></li>
        </ul>
      </div>

    </header>

  );
}

export default Header;
