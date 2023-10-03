function Pessoa({nome, idade, profissao, foto}) {

    return(
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>

            {/*PODE SER  props.nome ou definir em 
                        Pessoa(os atributos )*/}
        </div>
    )
}

export default Pessoa