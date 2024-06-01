import 'react-whatsapp-widget/dist/index.css';
import email from '../../img/e-mail.png';
import mapa from '../../img/icon-mapa.png';
import youtube from '../../img/youtube.png';
import facebook from '../../img/facebook.png';
import telefone from '../../img/telefone.png';
import whatsapp from '../../img/whatsapp.png';
import instagram from '../../img/instagram.png';
import styled from 'styled-components';
import Logo from '../Logo/Logo';

const ContainerFooter = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1024px) {

  & > p{
    margin: 0;
    width: 100%;
    padding: 2em 0;
    font-size: 1em;
    border-top: 1px solid var(--text-color-primary);
  }

`
const ContainerMain = styled.div`
width: 100%;
padding: 1em;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (min-width: 768px){
    display: grid;
    grid-template-rows: 2;
    grid-template-columns: 40% 60%;
}

@media screen and (min-width: 1024px){
  padding: 1em;
  justify-content: space-between;
  grid-template-columns: 30% 20% 15% 35%;
}
`
const ContainerLogo = styled.div`
  display: none;

  @media screen and (min-width: 768px){
    width: 100%;
    height: 100%;
    display: flex;
    grid-column: 1;
    grid-row: 1/ span 2;
  }

  @media screen and (min-width: 1024px){
    align-items: center;
    justify-content: center;
  }
`
const MenuExtensiveFooter = styled.ul`
  display: none;
  
  @media screen and (min-width:1024px){
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }
`
const MenuExtensiveItem = styled.li`
  display: flex;
  align-items: center;
  margin: 3% 0;
`
const MenuExtensiveLink = styled.a`
  font-size: 1.2vw;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--text-color-primary);

  @media screen and (min-width: 1024px){
    display: block;
    padding: 0.2em 0;
    overflow: hidden;
    position: relative;
    font-size: 1vw;

    &::after{
      left: 0;
      bottom: 0;
      opacity: 1;
      content: '';
      width: 100%;
      height: 0.07em;
      position: absolute;
      background-color: var(--text-color-primary);
      transform: translate3d(-102%, 0, 0);
      transition: opacity 300ms, transform 300ms;
    }

    &:hover::after{
      transform: translate3d(0, 0, 0);
    }

    &:focus::after{
      transform: translate3d(0, 0, 0);
    }
  }
`
const SocialMedia = styled.ul`
  width: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  margin: auto auto 1em;
  flex-direction: column;
  align-items: space-between;
  font-size: 3vw;

  @media screen and (min-width:768px){
    font-size: 2vw;
    font-weight: 600;
  }

  @media screen and (min-width:1024px){
    width: 100%;
    height: 100%;
    display: flex;
    padding: 3em 0;
    flex-direction: column;
    font-size: 1vw;
  }
`
const SocialMediaItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media screen and (min-width: 768px) {

  }
  
  @media screen and (min-width: 1024px) {

  }

`
const SocialMediaIcon = styled.img`
`
const ContainerContacts = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 2.7vw;

  

  @media screen and (min-width:768px){
      
    font-size:1.7vw;

    & < img {
      width: 5vw;
    }
  }

`
const Contacts = styled.p`
  font-size: 2.7vw;

  & > img {
    width: 4vw;
    margin-right: 2vw;
  }

  @media screen and (min-width:768px){
    font-size: 1.7vw;

    & > img {
      width: 3vw;
      margin-right: 1vw;
    }
  }

  @media screen and (min-width:1024px){
    font-size: 1vw;

    & > img {
      width: 1.8vw;
    }
  }
`

function Footer({ id }) {

  return (
    <ContainerFooter id={id}>
      <ContainerMain>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>
        <MenuExtensiveFooter>
          {['#cardImage', '#about', '#carousel', '#budget', '#contact'].map((href, index) => (
            <MenuExtensiveItem key={index}>
              <MenuExtensiveLink href={href}>{['Home', 'Quem Somos', 'Eventos', 'Solicitar Orçamento', 'Contato'][index]}</MenuExtensiveLink>
            </MenuExtensiveItem>
          ))}
        </MenuExtensiveFooter>
          <SocialMedia>
            <p>Siga nossas Redes Sociais</p>
            <SocialMediaItem>
              <a href="https://www.instagram.com/artevieira/"><SocialMediaIcon src={instagram} alt="instagram"/></a>
              <a href="https://www.facebook.com/ArteVieiraEventos"><SocialMediaIcon src={facebook} alt="facebook"/></a>
              <a href="https://www.youtube.com/@Artevieiracoquetelaria"><SocialMediaIcon src={youtube} alt="youtube"/></a>
            </SocialMediaItem>
          </SocialMedia>
        <ContainerContacts>
          <Contacts><img src={whatsapp} alt="img de um telefone" />(11) 95968-0087</Contacts>
          <Contacts><img src={telefone} alt="img de um telefone" />(11) 3294-6448</Contacts>
          <Contacts><img src={email} alt="img de um icone de email" />contato@artevieira.com</Contacts>
          <Contacts><img src={mapa} alt="img de um icone de marcador de mapa" />Alameda Afonso Bocchiglieri, 327
            Vila Arriete, São Paulo–SP</Contacts>
        </ContainerContacts>
      </ContainerMain>
      <p className="footer__text text-center">COPYRIGHT © 2024 | ARTE VIEIRA EVENTOS | TODOS OS DIREITOS RESERVADOS.</p>
    </ContainerFooter>
  );
}

export default Footer;
