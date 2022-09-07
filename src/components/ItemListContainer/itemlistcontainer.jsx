import React, {useState, useEffect} from "react";
import Title from "../title/Title";
import ItemCount from "../itemcount/itemcount";
import ItemList from "../itemlist/ItemList";



export const ItemListContainer = ({ texto }) => {
        const [data, setData] = useState ([]);

        useEffect(() => {
            const getData = new Promise (resolve => {
                setTimeout(() => {
                    resolve(searchProducts);
                }, 3000);
            });
            getData.then(res => setData(res))


        }, [])

        const [productos, setProductos] = useState([]);
        const searchProducts = async () => {
            try {
              const response = await fetch(
                "https://api.mercadolibre.com/sites/MLA/search?q=celulares"
              );
              const data = await response.json();
              setProductos(data.results);
            } catch (e) {
              //console.log(e);
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
