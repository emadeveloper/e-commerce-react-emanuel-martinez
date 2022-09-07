import ItemDetail from "../itemDetail/itemdetail";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const objeto = { id:1, image: "", titel : "samsung"}


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(objeto);
            }, 3000);
        });
        getData.then(res => setData(res))


    }, [])
    
    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;