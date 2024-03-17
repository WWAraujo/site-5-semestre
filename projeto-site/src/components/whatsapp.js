import '../App.css';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

/**
 * Icone do Whatsapp
 */
function IconWhatsapp() {
  return (
    <div className="App">
    <h1>Meu Site</h1>
    <WhatsAppWidget 
    phoneNumber="+5511959680087" message="Olá, como posso ajudar?"
    />
    </div>
  );
}

export default IconWhatsapp;
