function Team(){

    const subTitle = "Nossa Equipe:";
    const market = "Marketing e Comunicação";

    const felipe = "Felipe Vieira "

    const operation = "Operações e Vendas";
    const marcelo = "Marcelo Nascimento";

    const finance = "Financeiro e Analítico";
    const wallace = "Wallace Wagner";

    return(
        <div className="container-team">
            <div class="team-title">
                    <h2>{subTitle}</h2>
                </div>
                <div class="team">
                    <div class="team-person-marketing">
                        <h3>{market}</h3>
                        <h6>{felipe}</h6>
                    </div>
                    <div class="team-person-operation">
                        <h3>{operation}</h3>
                        <h6>{marcelo}</h6>
                    </div>
                    <div class="team-person-financial">
                        <h3>{finance}</h3>
                        <h6>{wallace}</h6>
                    </div>
                </div>
        </div>
    )
}

export default Team;