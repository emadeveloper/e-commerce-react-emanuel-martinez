import React, {useState, useEffect} from "react";
import Title from "../title/Title";
import ItemCount from "../itemcount/itemcount";
import ItemList from "../itemlist/ItemList";
import { useParams } from "react-router-dom";



export const ItemListContainer = ({ texto }) => {
        const [data, setData] = useState ([]);

        const {categoriaId} = useParams();

        useEffect(() => {
            const getData = new Promise (resolve => {
                setTimeout(() => {
                    resolve(searchProducts);
                }, 1000);
            });
            if 
              (categoriaId) {
                getData.then(res => setData(res.filter(celular => celular.category === categoriaId)));
              } else {
                getData.then(res => setData(res))
              }

            getData.then(res => setData(res))


        }, [categoriaId])

        const [productos, setProductos] = useState([]);
        const searchProducts = async () => {
            try {
              const response = await fetch(
                "https://api.mercadolibre.com/sites/MLA/search?q=celulares"
              );
              const data = await response.json();
              setProductos(data.results);
            } catch (e) {
              console.log(productos);
            }
          };
        
          useEffect(() => {
            searchProducts();
          }, []);
          

        const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    };

    return (
        <>
        <Title greeting={texto} />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data} />
        </>
    );
    };

    export default ItemListContainer;
