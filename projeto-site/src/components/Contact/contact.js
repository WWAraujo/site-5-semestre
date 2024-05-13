import React, { useState } from 'react';
import SendMessage from '../../sendMessage';
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import '../../styles/contact.css'

// import IContact from '../interfaces/IContact.js';

function ModalFunction(props) {

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

        // eslint-disable-next-line no-template-curly-in-string
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
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Cabeçalho
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className='container-contact '>
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
                            <a href={`https://web.whatsapp.com/send?phone=${encodeURIComponent(formData.phone)}&text=${encodeURIComponent('Olá sou o ' + formData.name + ' Meu email: ' + formData.email + ' Assunto: ' + formData.subject + ' ' + formData.message)}`} className="btn btn-primary">Enviar mensagem</a>
                        </div>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

function Contact() {
    const [modalShow, setModalShow] = React.useState(false);
    const [animationClass, setAnimationClass] = useState('');

    const handleOpenModal = () => {
        setAnimationClass('tracking-out-expand');
        setTimeout(() => {

            setModalShow(true);
        }, 500);
    }

    const handleCloseModal = () => {
        setTimeout(() => {
            setAnimationClass('tracking-out-expand-reverse');
            setModalShow(false);
            setTimeout(() => {
                setAnimationClass('');
            }, 800);
        }, 100);
    }

    return (
        <div className="container-buttonmodal">
            <Button
                className={`button-openmodal ${animationClass}`}
                onClick={handleOpenModal}
            >
                CLIQUE E SOLICITE SEU ORÇAMENTO AGORA!
            </Button>
            <ModalFunction
                show={modalShow}
                onHide={handleCloseModal}
                animation={true}
                
            />
        </div>
    );
}

export default Contact;