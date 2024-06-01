import styled from 'styled-components'

function About({ id }) {
    const title = "Conheça a Arte Vieira"

    const content = "Em 2012, nascia a Arte Vieira Coquetelaria, " +
        "Nossa missão é proporcionar aos nossos clientes e seus convidados a melhor experiência em coquetelaria. " +
        "Atuando no ramo da coquetelaria criando conceitos e possibilidades para nossos diversos tipos de clientes. " +
        "Lançando tendências no mercado de luxo e valorizando o mercado. " +
        "Nosso Casting é altamente treinado e está apto para atender os convidados sempre com muita postura e cordialidade, conjunto esse que faz parte da cultura da marca Arte Vieira Coquetelaria " +
        "Prêmios e reconhecimentos " +
        "A excelência na prestação de serviço que nos caracteriza já reflete nos prêmios conquistados nos últimos anos: 2015 à 2018, Prêmio qualidade Brasil na categoria prestação de serviço, já em 2016 – Top Of Bussiness.";

    const ContainerAbout = styled.section`
            margin: 0;
            width: 100%;
            padding: 10%;
            display: flex;
            align-items: center;
        `

    const Introdution = styled.div`
            margin: 1%;

            @media screen and (min-width: 1024px) {
            width: 70%;
            }
        `

    const TituloAbout = styled.h1`
            font-size: 4vw;
            font-weight: 600;

            @media screen and (min-width: 768px) {                
                font-size:2.5vw;
            }
        `

    const ContentAbout = styled.p`
            font-size: 2.3vw;
            font-weight: 300;
            text-align: justify;

            @media screen and (min-width:1024px) {
                font-size: 1.15vw;
                line-height: 1.7em;
            }
        `

    return (
        <ContainerAbout id={id}>
            <Introdution >
                <TituloAbout>{title}</TituloAbout>
                <ContentAbout>{content}</ContentAbout>
            </Introdution>
        </ContainerAbout>
    )

}

export default About;