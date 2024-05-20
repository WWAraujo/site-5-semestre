

function About({id}) {
    const title = "Conheça a Arte Vieira";

    const content = "Em 2012, nascia a Arte Vieira Coquetelaria, " +
        "Nossa missão é proporcionar aos nossos clientes e seus convidados a melhor experiência em coquetelaria. " +
        "Atuando no ramo da coquetelaria criando conceitos e possibilidades para nossos diversos tipos de clientes. " +
        "Lançando tendências no mercado de luxo e valorizando o mercado. " +
        "Nosso Casting é altamente treinado e está apto para atender os convidados sempre com muita postura e cordialidade, conjunto esse que faz parte da cultura da marca Arte Vieira Coquetelaria " +
        "Prêmios e reconhecimentos " +
        "A excelência na prestação de serviço que nos caracteriza já reflete nos prêmios conquistados nos últimos anos: 2015 à 2018, Prêmio qualidade Brasil na categoria prestação de serviço, já em 2016 – Top Of Bussiness.";



    return (
        <div className="container-about" id={id}>
            <div className="about-introdution">
                <div className="about-title-content">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    ) 
}

export default About;