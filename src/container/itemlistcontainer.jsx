import ItemCount from "../components/itemcount/itemcount";

const ItemListContainer = (greeting) => {
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }
    
    return (
        <>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <p style={{color:greeting.color}}>{greeting.items}</p>
        </>
        
        
    )
};


export default ItemListContainer;