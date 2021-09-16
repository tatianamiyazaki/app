import './estilos/estilos.css'

function CepConsultado ({ evento }){
    return(
        <>
        <h2>Cep Encontrado</h2>

        <ul className="list-group">
            
            { evento.map( item =>
                <li className = "list-group-item" 
                    key = {item.cep}>

                    <span> CEP: {item.cep}</span>
                    <span> Logradouro: {item.logradouro}</span>
                    <span> Bairro: {item.bairro}</span>
                    <span> Localidade: {item.localidade}</span>
                    <span> UF: {item.uf}</span>
                </li>

            )}

        </ul>
        </>
    )
}

export default CepConsultado;