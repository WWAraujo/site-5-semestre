import logo from './imagem/logo-escuro.png';
import fotoInicio from './imagem/001.JPG'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo}alt="Logo da Arte Vieira"/>
      </header>
      <main className="App-content">
        <img className="App-foto-inicio" src={fotoInicio} 
        alt="Foto com 4 drinks diferentes, 1 negroni, 1 moscow mule, 1 maracujack, 1 passione, e atrás dos drinks 3 garrafas usadas para fazer os drinks, Vodka, Aperou e Gin" />
      </main>
      <footer className="App-footer">
        <h4 className="App-h4-footer">COPYRIGHT © 2024 | ARTE VIEIRA EVENTOS | TODOS OS DIREITOS RESERVADOS.</h4>
      </footer>
    </div>
  );
}

export default App;
