import { Link } from "@material-ui/core";

const Item = ({ product }) => {
  const { name, description, price, image } = product;

  return (
    <div>
      <Link to={`/item/${product.id}`}>
        <div style={{ width: "15rem" }}>
          <div>
            <h2>{name}</h2>
            <img
              src={image}
              alt="Imagen de Producto"
            />
            <p>{description}</p>
            <h6>${price}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;