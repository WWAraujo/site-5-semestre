import '../App.css';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

/**
 * Icone do Whatsapp
 */
function IconWhatsapp() {

 


  return (
    <div className="App-whatsapp">


    <WhatsAppWidget 
      sendButtonText = "Enviar"
      inputPlaceHolder = "Digite aqui a sua dúvida"
      companyName = "Arte Vieira"
      replyTimeText = "Canal de vendas"
      phoneNumber="+5511959680087" 
      message="Olá, como posso ajudar?"
    />
    </div>
  );
}

export default IconWhatsapp;
