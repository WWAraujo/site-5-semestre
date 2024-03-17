import './App.css';
import 'react-whatsapp-widget/dist/index.css';
import Header from './header/header';
import CardImage from './components/cardImage'
import IconWhatsapp from './components/whatsapp';
import Footer from './footer/footer';

/**
 * Tela principal
 * TODO: Evitar criar muito código nessa tela, caso necessário criar novos componentes e mapear aqui, 
 * manter área organizada para um código clean
 */
function App() {
  return (
    <div className="App">
      
      {/* Realize o import do componente  */}
      <Header />
      <CardImage /> 
      <IconWhatsapp />
      <Footer />

    </div>
  );
}

export default App;
