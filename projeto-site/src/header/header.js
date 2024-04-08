/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../imagem/logo-escuro.png';
import '../App.css';
import 'react-whatsapp-widget/dist/index.css';

/**
 * Cabeçalho principal
 */
function Header() {
  return (
    <header className="App-header">
      <div class="logo">
        <img className="App-logo" src={logo} alt="Logo da Arte Vieira" />
      </div>
      <div class="container-header">
        <input type="checkbox" id="menu" class="container__button" />
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
            <a href="#" class="menu-list-link">Tipos de Eventos</a>
          </li>
          <li class="menu-list-item">
            <a href="#" class="menu-list-link">Solicitar Orçamento</a>
          </li>
        </ul>
      </div>
    </header>

  );
}

export default Header;
