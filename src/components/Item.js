function Item({marca, ano_lancamento}){
    return(
        <>
        <li>{marca} - {ano_lancamento}</li>
        <p>Legenda do item</p>
        </>
    )
}

// Item.PropTypes = {
//      marca: PropTypes.string.isRequired,
// }

Item.defaultProps = {
     marca: "faltou",
     ano_lancamento: 0,

}
export default Item 