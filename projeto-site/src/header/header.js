import logo from '../imagem/logo-escuro.png';
import '../App.css';
import 'react-whatsapp-widget/dist/index.css';

/**
 * Cabeçalho principal
 */
function Header() {
  return (
      <header className="App-header">
        <div class="container text-center">
          <div class="row text-center">
            <div class="col-sm-3">
              <img className="App-logo" src={logo}alt="Logo da Arte Vieira"/>
            </div>

            <div class="col-2">
              Home
            </div>
            <div class="col-2">
              Quem Somos
            </div>
            <div class="col-2">
              Tipos de Eventos
            </div>
            <div class="col-2">
              Solicitar Orçamento
            </div>
          </div>
        </div>
      </header>
    
  );
}

export default Header;
