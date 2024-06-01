import fotoInicio from '../../img/001.JPG'
import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0 1% ;
  background-color: var(--background-color-secundary);
  `

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  text-align: center;
  object-position: center;
  `

function CardImage({ id }) {
  return (
    <Container id={id}>
      <Image
        src={fotoInicio}
        alt="Foto com 4 drinks diferentes, 1 negroni, 1 moscow mule, 1 maracujack, 1 passione, e atrás dos drinks 3 garrafas usadas para fazer os drinks, Vodka, Aperou e Gin" />
    </Container>
  );
}

export default CardImage;
