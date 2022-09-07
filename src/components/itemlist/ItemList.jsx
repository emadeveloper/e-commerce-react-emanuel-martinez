import Item from "../item/item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
        data.map(celular => <Item key={celular.id} info={celular} />)
    );
}

export default ItemList;