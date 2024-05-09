import React, { useState } from 'react';
import SendMessage from '../../SendMessage';

// import IContact from '../interfaces/IContact.js';

function Contact() {

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        phone: '',
        subject: '',
        message: ''
    });

    /**
     * Evento para inserir no formData
     * @param {*} e 
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    /**
     * Evento para envio do formulário
     * @param {*} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        SendMessage('https://web.whatsapp.com/send?phone=${encodeURIComponent(11930004230)}&text=${encodeURIComponent(testeeeee)}', 'testeeeeeeeeee');
        // Aqui você pode usar a instância newContact conforme necessário, por exemplo, enviar para um servidor
        console.log(formData);

        setFormData({
            email: '',
            name: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Nome</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="João da Costa Vieira" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Endereço de email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="artevieira@exemplo.com" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput3">Telefone</label>
                    <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="11 91221-2121" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Assunto</label>
                    <select className="form-control" id="exampleFormControlSelect1" name="subject" value={formData.subject} onChange={handleChange}>
                        <option>Contato</option>
                        <option>Vamos fazer um orçamento</option>
                        <option>Outro</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Mensagem</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Quero fazer um orçamento para minha festa de 15 anos" name="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <div className='text-center mb-3'>
                    <a href={`https://web.whatsapp.com/send?phone=${encodeURIComponent(formData.phone)}&text=${encodeURIComponent(formData.message)}`} className="btn btn-primary">Enviar mensagem</a>
                    <button href="https://web.whatsapp.com/send?phone=5511999999999&text=Olá%20mundo!" type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;