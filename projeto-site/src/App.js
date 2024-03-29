import './App.css';
import 'react-whatsapp-widget/dist/index.css';
import Header from './header/header';
import CardImage from './components/cardImage'
import IconWhatsapp from './components/whatsapp';
import Footer from './footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about';


/**
 * Tela principal
 * TODO: Evitar criar muito código nessa tela, caso necessário criar novos componentes e mapear aqui, 
 * manter área organizada para um código clean
 */
function App() {
  return (
    <div className="App">
      
      {/* Realize o import do componente  */}
      <div>
        <Header />
        <CardImage /> 
        <About />
        
        <Footer />
      </div>
      <IconWhatsapp />
    </div>
  );
}

export default App;
