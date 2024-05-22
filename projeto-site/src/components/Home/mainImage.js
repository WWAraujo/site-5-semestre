import 'react-whatsapp-widget/dist/index.css';
import fotoInicio from '../../img/001.JPG'

function CardImage({id}) {
  return (
    <div className="container-image" id={id}>
      <div className="imagem-container">
        <img className="imagem-maxima" 
          src={fotoInicio} 
          alt="Foto com 4 drinks diferentes, 1 negroni, 1 moscow mule, 1 maracujack, 1 passione, e atrás dos drinks 3 garrafas usadas para fazer os drinks, Vodka, Aperou e Gin" />
      </div>
    </div>
  );
}

export default CardImage;
