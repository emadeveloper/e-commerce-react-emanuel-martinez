const ItemListContainer = (greeting) => {
    return (
        <p style={{color:greeting.color}}>{greeting.items}</p>
    )
};

export default ItemListContainer;