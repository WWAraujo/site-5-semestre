import './App.css';
import 'react-whatsapp-widget/dist/index.css';
import 'swiper/css/bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, {useState} from 'react';
import Header from './header/header';
import CardImage from './components/cardImage'
import IconWhatsapp from './components/whatsapp';
import About from './components/about';
import Carousel from './components/carousel';
import Team from './components/team';
import Feedback from './components/feedback';
import Footer from './footer/footer';
import Contact from './components/Contact/budget'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';

function App() {

  return (
    <div className="App">

      <div>
        <Header/>
        <CardImage id="cardImage"/>
        <About id="about" />
        <Carousel id="carousel" />
        <Contact id="budget"/>
        <Team />
        
        <Feedback />
        <Footer id="contact"/>
        
      </div>

      <IconWhatsapp />
    </div>
  );
}

export default App;
