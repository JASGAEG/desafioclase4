import { Link } from "@material-ui/core";

const Item = ({ product }) => {
  const { id, name, description, price, image } = product;

  return (
    <div>
      <Link to={`/item/${id}`}>
          <div>
            <h2>{name}</h2>
            <img
              src={image}
            />
            <p>{description}</p>
            <h6>${price}</h6>
          </div>
      </Link>
    </div>
  );
};

export default Item;