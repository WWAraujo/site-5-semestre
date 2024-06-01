/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, useState } from 'react'
import youtube from '../../img/youtube.png'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'
import { Toggle } from './Toogle/Toogle'
import styled from 'styled-components'
import Logo from '../Logo/Logo'
import MenuIcon from '../../img/Menu.png'

const ContainerHeader = styled.div`
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: grid;
  padding: 0 0.5%;
  max-height:100%;
  position: sticky;
  align-items: center;
  grid-template-rows: 1;
  transition: top 0.3s ease;
  grid-template-columns: 15% 70% 15%;
  justify-content: space-between;
  background-color: var( --background-color-secundary);
  transition: top 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    height: 100%;
    justify-content: space-around;
    grid-template-columns: 25% 60% 10%;}
    `
const ContainerLogo = styled.div`
    width: 100%;
    height: 100%;
    max-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 2;

    @media screen and (min-width:768px) {
      grid-column: 1;
      max-height: 80px;
    }
  `
const ContainerNavigation = styled.div`
    height: 100%;
    display: flex;
    grid-column: 1;
    position: relative;
    align-items: center;
    justify-content: center;
    grid-row: 1;

    @media screen and (min-width:768px){
      grid-column: 2;
      justify-content:
      border: 2px solid red;
    }
  `
const ToggleMobile = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
  `
const BurguerMenu = styled.label`
  `
const BurguerMenuSpan = styled.span`
    width: 24px;
    height: 24px;
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${MenuIcon});
    
    @media screen and (min-width: 768px) {
      display: none;
    }
  `
const MenuList = styled.ul`
    top: 100%;
    width: 60vw;
    right: 110%;
    padding: 10%;
    height: 70vh;
    position: absolute;
    transform: ${({ checked }) => (checked ? 'translateX(100%)' : 'translateX(0%)')};
    transition: transform .5s;
    border: 1px solid var(--text-color-primary);
    background-color: var(--background-color-primary);

    & > p{
      bottom: 0;
      width: 100%;
      font-size: 3vw;
      position: absolute;
      text-align: center;
      text-transform:uppercase;
    }
    @media screen and (min-width: 768px) {
      display: none;
    }

  `
const MenuItem = styled.li`
    margin: 10px;
    padding: 5% 5%;
    text-align: center;
    border-radius: 5px;
    border: 2px solid var(--text-color-primary);
    background-color: var(--background-color-primary);
  `
const MenuLink = styled.a`
    padding: 5%;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 3vw;
    color: var(--text-color-primary);
  
  `
const SocialMedia = styled.li`
  bottom: 5%;
  width: 100%;
  display: flex;
  padding: 1em 3em;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  `
const SocialMediaLogo = styled.img`
    width: 20px;
`
const MenuExtensive = styled.ul`
    display: none;

    @media screen and (min-width:768px){
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;}
`
const MenuExtensiveItem = styled.li`
  display: flex;
  align-items: center;
`
const MenuExtensiveLink = styled.a`
  font-size: 1.2vw;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--text-color-secundary);

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
      background-color: var(--branco);
      transform: translate3d(-101%, 0, 0);
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
function Header({ isLight, setIsLight }) {

  const [isChecked, setIsChecked] = useState(false);
  let lastScrollTop = useRef(0);
  const menuRef = useRef(null);
  const burgerMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop
      if (currentScroll > lastScrollTop.current) {
        document.querySelector(`${ContainerHeader}`).style.top = '-110px'
      } else {
        document.querySelector(`${ContainerHeader}`).style.top = '0'
      }
      lastScrollTop.current = currentScroll
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !burgerMenuRef.current.contains(event.target)) {
        setIsChecked(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleToggleChange = () => { setIsChecked(!isChecked) }
  const handleMenuLinkClick = () => setIsChecked(false);

  return (
    <ContainerHeader>
      <ContainerLogo>
        <Logo />
      </ContainerLogo>
      <ContainerNavigation>
        <ToggleMobile type="checkbox" id="menu" checked={isChecked} onChange={handleToggleChange} />
        <BurguerMenu htmlFor="menu" ref={burgerMenuRef}>
          <BurguerMenuSpan />
        </BurguerMenu>
        <MenuList checked={isChecked} ref={menuRef}>
          {['#cardImage', '#about', '#carousel', '#budget', '#contact'].map((href, index) => (
            <MenuItem key={index}>
              <MenuLink href={href} onClick={handleMenuLinkClick}>{['Home', 'QuemSomos', 'Eventos', 'Solicitar Orçamento', 'Contato'][index]}</MenuLink>
            </MenuItem>
          ))}
          <SocialMedia>
            <a href="https://www.instagram.com/artevieira/">
              <SocialMediaLogo src={instagram} alt="instagram" />
            </a>
            <a href="https://www.facebook.com/ArteVieiraEventos">
              <SocialMediaLogo src={facebook} alt="facebook" />
            </a>
            <a href="https://www.youtube.com/@Artevieiracoquetelaria">
              <SocialMediaLogo src={youtube} alt="youtube" />
            </a>
          </SocialMedia>
          <p>Siga Nossas redes sociais</p>
        </MenuList>
        <MenuExtensive>
          {['#cardImage', '#about', '#carousel', '#budget', '#contact'].map((href, index) => (
            <MenuExtensiveItem key={index}>
              <MenuExtensiveLink href={href} className="menu__link">{['Home', 'Quem Somos', 'Eventos', 'Solicitar Orçamento', 'Contato'][index]}</MenuExtensiveLink>
            </MenuExtensiveItem>
          ))}
        </MenuExtensive>
      </ContainerNavigation>
      <Toggle
        isChecked={isLight}
        handleChange={() => setIsLight(!isLight)}
      />
    </ContainerHeader>
  );
}

export default Header;
