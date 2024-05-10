function SendMessage(contact, message) {
    // Encontra a conversa pelo nome do contato
    const chatList = document.querySelectorAll('div[role="button"]');
    let contactFound = false;
    for (let i = 0; i < chatList.length; i++) {
        const chat = chatList[i];
        const title = chat.querySelector('._3Dr46')?.innerText || '';
        if (title.toLowerCase().includes(contact.toLowerCase())) {
            // Abre a conversa
            chat.click();
            contactFound = true;
            break;
        }
    }
    
    if (!contactFound) {
        console.log('Contato não encontrado.');
        return;
    }
    
    const input = document.querySelector('[contenteditable="true"]');
    if (input) {
        const event = new InputEvent('input', { bubbles: true });
        Object.defineProperty(event, 'inputType', { value: 'insertText' });
        input.focus();
        document.execCommand('insertText', false, message);
        input.dispatchEvent(event);
        
        const sendButton = document.querySelector('button._4sWnG');
        if (sendButton) {
            sendButton.click();
        } else {
            console.log('Botão de envio não encontrado.');
        }
    } else {
        console.log('Campo de mensagem não encontrado.');
    }
}

export default SendMessage;
