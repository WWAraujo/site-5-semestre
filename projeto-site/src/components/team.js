function Team() {

    const subTitle = "Nossa Equipe:";
    const market = "Marketing e Comunicação";

    const felipe = "Felipe Vieira "

    const operation = "Operações e Vendas";
    const marcelo = "Marcelo Nascimento";

    const finance = "Financeiro e Analítico";
    const wallace = "Wallace Wagner";

    return (
        <div className="container-team">
            <div class="team-title">
                <h3>{subTitle}</h3>
            </div>
            <div class="team">
                <div class="team-person">
                    <h6>{market}</h6>
                    <h5>{felipe}</h5>
                </div>
                <div class="team-person">
                    <h6>{operation}</h6>
                    <h5>{marcelo}</h5>
                </div>
                <div class="team-person">
                    <h6>{finance}</h6>
                    <h5>{wallace}</h5>
                </div>
            </div>
        </div>
    )
}

export default Team;