import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import './../styles/whatsapp.css'

function IconWhatsapp() {

  return (
    <div className="App-whatsapp btn-floating menuwhatsapp">
      <WhatsAppWidget 
        sendButtonText = "Enviar"
        inputPlaceHolder = "Digite aqui a sua dúvida"
        companyName = "Arte Vieira"
        replyTimeText = "Canal de vendas"
        phoneNumber="+5511959680087" 
        message="Olá, como posso te ajudar?"
      />
      
      </div>
  );
}

export default IconWhatsapp;
