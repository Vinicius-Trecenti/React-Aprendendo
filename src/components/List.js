import Item from "./Item"

function List(){
    return(
        <>
        <h1>Uma lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={1975}/>
            <Item marca="Ferrari" ano_lancamento={1985}/>
            <Item/>
        </ul>
        </>
    )
}

export default List