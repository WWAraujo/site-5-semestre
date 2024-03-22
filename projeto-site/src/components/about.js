

function About(){
    const title = "Sobre";
    
    const content = "Em 2012, nascia a Arte Vieira Coquetelaria, " + 
    "Nossa missão é proporcionar aos nossos clientes e seus convidados a melhor experiência em coquetelaria. " +
    "Atuando no ramo da coquetelaria criando conceitos e possibilidades para nossos diversos tipos de clientes. " + 
    "Lançando tendências no mercado de luxo e valorizando o mercado. " +
    "Nosso Casting é altamente treinado e está apto para atender os convidados sempre com muita postura e cordialidade, conjunto esse que faz parte da cultura da marca Arte Vieira Coquetelaria" +
    "Prêmios e reconhecimentos" +
    "A excelência na prestação de serviço que nos caracteriza já reflete nos prêmios conquistados nos últimos anos: 2015 à 2018, Prêmio qualidade Brasil na categoria prestação de serviço, já em 2016 – Top Of Bussiness.";
    
    const subTitle = "Nossa Equipe:";
    const market = "Marketing e Comunicação";

    const felipe = "Felipe Vieira "

    const operation = "Operações e Vendas";
    const marcelo = "Marcelo Nascimento";

    const finance = "Financeiro e Analítico";
    const wallace = "Wallace Wagner";
    
    return (
    <div className="container">
        <p></p>
        <div className="container text-center">
            <div class="row">
                <div class="col-sm-8">
                    <h1>{title}</h1>
                    <h4>{content}</h4>
                </div>
                <div class="col-sm-4">
                    Adicionar alguma foto
                </div>
            </div>
            <h2>{subTitle}</h2>
            <div class="row">
                <div class="col-sm">
                    <h3>{market}</h3>
                    <h6>{felipe}</h6>
                </div>
                <div class="col-sm">
                    <h3>{operation}</h3>
                    <h6>{marcelo}</h6>
                </div>
                <div class="col-sm">
                    <h3>{finance}</h3>
                    <h6>{wallace}</h6>
                </div>
            </div>
        </div>
    </div>
    
    )
        
}

export default About;