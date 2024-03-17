import logo from '../imagem/logo-escuro.png';
import '../App.css';
import 'react-whatsapp-widget/dist/index.css';

/**
 * Cabeçalho principal
 */
function Header() {
  return (
    <div className="App">

      <header className="App-header">
        <img className="App-logo" src={logo}alt="Logo da Arte Vieira"/>
      </header>
    </div>
  );
}

export default Header;
