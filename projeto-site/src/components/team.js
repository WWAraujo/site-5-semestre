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
            <div className="team-title">
                <h2>{subTitle}</h2>
            </div>
            <div className="team">
                <div className="team-person">
                    <h3>{market}</h3>
                    <h4>{felipe}</h4>
                </div>
                <div className="team-person">
                    <h3>{operation}</h3>
                    <h4>{marcelo}</h4>
                </div>
                <div className="team-person">
                    <h3>{finance}</h3>
                    <h4>{wallace}</h4>
                </div>
            </div>
        </div>
    )
}

export default Team;