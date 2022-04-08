import Item from "./Item";

const ItemList = ({ items}) => {
    return (
        <>
            {
                items.lenght > 0
                ? items.map(item => <Item key={item.id} title={item.name} price={item.price} pictureUrl={item.image[0]}/>)
                :<p>Cargando...</p>
            }
        </>
    );
}

export default ItemList;