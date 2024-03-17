import fotoInicio from '../imagem/001.JPG'
import '../App.css';
import 'react-whatsapp-widget/dist/index.css';

/**
 * Icone com imagem
 * TODO: Renomear card e definir o propósito
 */
function CardImage() {
  return (
    <div className="App">
      <main className="App-content">
        <img className="App-foto-inicio" src={fotoInicio} 
        alt="Foto com 4 drinks diferentes, 1 negroni, 1 moscow mule, 1 maracujack, 1 passione, e atrás dos drinks 3 garrafas usadas para fazer os drinks, Vodka, Aperou e Gin" />
      </main>      
    </div>
  );
}

export default CardImage;
