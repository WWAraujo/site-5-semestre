import React, {useState} from 'react';
import './App.css';
import 'swiper/css/bundle';
import 'swiper/css/bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-whatsapp-widget/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/about';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Contact from './components/Contact/budget';
import Carousel from './components/Events/carousel';
import CardImage from './components/Home/mainImage';
import Feedback from './components/Assessments/feedback';
import IconWhatsapp from './components/WhatsApp/whatsapp';


function App() {
  const [isLight, setIsLight] = useState(false);

  return (
    <div className="App" data-theme={isLight ? "light" : "dark"}>

      <div>
        <Header isLight={isLight} setIsLight={setIsLight}/>
        <CardImage id="cardImage" />
        <About id="about" />
        <Carousel id="carousel" />
        <Contact id="budget" />
        <Feedback id="feedback" />
        <Footer id="contact" />
      </div>

      <IconWhatsapp />
      
    </div>
  );
}

export default App;
