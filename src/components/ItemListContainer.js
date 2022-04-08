import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect, useState } from 'react';
import customFetch from "./customFetch";
const { products } = require('./products');

const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, []);

    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " productos.");
    }

    return (
        <>
        <>{greeting}</>
        <ItemList items={datos} />
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;