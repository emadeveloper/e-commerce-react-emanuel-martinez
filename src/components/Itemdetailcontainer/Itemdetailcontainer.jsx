import ItemDetail from "../itemDetail/itemdetail";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



const celulares = [
{ id:1, image: "https://i.picsum.photos/id/137/200/300.jpg?hmac=5vAnK2h9wYgvt2769Z9D1XYb8ory9_zB0bqDgVjgAnk", title : "Galaxy A20", category: "Samsung"},
{ id:2, image: "https://i.picsum.photos/id/137/200/300.jpg?hmac=5vAnK2h9wYgvt2769Z9D1XYb8ory9_zB0bqDgVjgAnk", title : "Galaxy A21", category: "Samsung"},
{ id:3, image: "https://i.picsum.photos/id/137/200/300.jpg?hmac=5vAnK2h9wYgvt2769Z9D1XYb8ory9_zB0bqDgVjgAnk", title : "Galaxy A22", category: "Samsung"},
{ id:4, image: "https://i.picsum.photos/id/137/200/300.jpg?hmac=5vAnK2h9wYgvt2769Z9D1XYb8ory9_zB0bqDgVjgAnk", title : "Galaxy A50", category: "Samsung"}
    
]



export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(celulares);
            }, 3000);
        });
        getData.then(res => setData(res.find(celular => celular.id === parseInt(detalleId))))


    }, [])
    
    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;