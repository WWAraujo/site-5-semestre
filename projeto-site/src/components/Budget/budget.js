import styled from 'styled-components'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button } from 'react-bootstrap'
import LogoArteVieira from '../../img/backgroundimage.png'


const StyledModalTitle = styled(Modal.Title)`
    flex-grow: 1;
    font-weight: 600;
    font-size: 1.2em;
    text-align: center;
    text-transform: uppercase;
`
const StyledButton = styled(Button)`
    background: transparent;
    color: #000;
    padding: 1em;
    margin-top: 1%;
    text-transform: uppercase;

    &:hover{
        background: transparent;
        color: #000;
    }
`
const StyledLabel = styled.label`
    text-transform: uppercase;
    font-weight: 500;
    margin: .3em 0;
`
const StyledInput = styled.input`
    padding: .5em ;
`
const ContainerBudget = styled.div`
        z-index: 1;
        padding: 5%;
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    
        &:before {
            top: 0;
            left: 0;
            content: "";
            z-index: -1;
            width: 100%;
            height: 100%;
            opacity: var(--contrast-logo);
            position: absolute;
            background: no-repeat center/70% url(${LogoArteVieira});
        }
`
const TextBudget = styled.p`
        width: 90%;
        display: flex;
        margin: 2% 0 5%;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        font: italic 300 2.3vw sans-serif;
    
        @media screen and (min-width: 1024px) {
            width:80%;
            font-size: 1.7vw;
        }
`
const ButtonBudget = styled.button`
        width: 80%;
        max-height: 20%;
        font-size: 2.6vw;
        font-weight: 600;
        transition: 0.25s;
        padding: 2vw 4vw;
        font-style: oblique;
        border-radius: 20px;
        margin: max(1rem, 3vw);
        color: var(--text-color-primary);
        border: 0.30em solid var(--text-color-primary);
        background-color: var(--background-color-primary);
    
            @media screen and (min-width: 768px) {
                max-height: 10%;
                font-size: 2.3vw;
                padding: 1.5vw 4vw;
            }
    
            @media screen and (min-width: 1024px){
                width: 50%;
                max-height: 10%;
                font-size: 1.5vw;
                padding: 1.5vw 4vw;
    
                &: hover{
                    color: var(--text-color-secundary);
                    border-color: var(--text-color-primary);
                    transform: translateY(-0.25em);
                    box-shadow: 0 0.5em 1em -0.4em var(--text-color-primary);
                    background-color: var(--background-color-secundary);
                }
            }  
`

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

        const phoneNumber = '5511959680087';
        const message = `Olá, sou o(a) ${formData.name}\n\nEmail: ${formData.email}\n${formData.subject}\n${formData.message}`;
        const url = `https://web.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');

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
            centered
            size='xl'
        >
            <Modal.Header closeButton>
                <StyledModalTitle>
                    Eventos inesquecíveis começam com drinks incríveis. Solicite seu pré-orçamento aqui.
                </StyledModalTitle>
            </Modal.Header>
            <Modal.Body>

                <div className='container-contact'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <StyledLabel htmlFor="nome">Nome</StyledLabel>
                            <StyledInput type="text" className="form-control" id="nome" placeholder="João da Costa Vieira" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <StyledLabel htmlFor="email">Endereço de email</StyledLabel>
                            <StyledInput type="email" className="form-control" id="email" placeholder="artevieira@exemplo.com" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <StyledLabel htmlFor="telefone">Telefone</StyledLabel>
                            <StyledInput type="text" className="form-control" id="telefone" placeholder="11 91221-2121" name="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <StyledLabel htmlFor="assunto">Assunto</StyledLabel>
                            <select className="form-control" id="assunto" name="subject" value={formData.subject} onChange={handleChange}>
                                <option>Contato</option>
                                <option>Vamos fazer um orçamento</option>
                                <option>Outro</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <StyledLabel htmlFor="exampleFormControlTextarea1">Mensagem</StyledLabel>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Quero fazer um orçamento para minha festa de 15 anos" name="message" value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <div className='text-center mb-3'>
                            <StyledButton type="submit">Enviar mensagem</StyledButton>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    )
}

function Contact({ id }) {
    const [modalShow, setModalShow] = React.useState(false);
    const handleOpenModal = () => {
        setTimeout(() => {
            setModalShow(true);
        }, 100);
    }
    const handleCloseModal = () => {
        setModalShow(false);
    }

    return (
        <ContainerBudget id={id}>
            <TextBudget>
                "Leve seu evento a outro nível com nossos drinks criativos, técnicas de mixologia sofisticadas e apresentações impressionantes. Solicite um pré-orçamento clicando no botão abaixo e saiba mais sobre nossos serviços de coquetelaria para festas e eventos."
            </TextBudget>
            <ButtonBudget onClick={handleOpenModal}>
                CLIQUE E SOLICITE SEU ORÇAMENTO AGORA!
            </ButtonBudget>
            <ModalFunction
                show={modalShow}
                onHide={handleCloseModal}
                animation={true}
            />
        </ContainerBudget>
    );
}

export default Contact;