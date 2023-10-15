import Button from "./evento/button"

function Evento({numero}) {

    function dispararevento(){
        console.log(`DISPAROU o primeiro evento`) 
    }

    function disparandosegundoevento(){
        console.log("Disparou o segundo evento")
    }
    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button  event={dispararevento} text="Primeiro evento"/>
            <Button  event={disparandosegundoevento} text="Segundo evento"/>
            {/* <button onClick={dispararevento}>Ativiar!</button> */}
        </div>
    )
}

export default Evento