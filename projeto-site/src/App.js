import './App.css';
import 'react-whatsapp-widget/dist/index.css';
import 'swiper/css/bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/header';
import CardImage from './components/cardImage'
import IconWhatsapp from './components/whatsapp';
import Carousel from './components/carousel';
import Team from './components/team';
import About from './components/about';
import Footer from './footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';


function App() {
  // const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <div className="App">
      
      <div>
        <Header />

        <CardImage />
        <About />
        <Carousel />
        <Team/>

        <Footer />
      </div>

      <IconWhatsapp />
    </div>
  );
}

export default App;
