import { Badge } from "@material-ui/core";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartWidget = () =>{
    return (
        <Badge badgeContent={5} color="primary">
            <AddShoppingCartIcon />
        </Badge>
    );
} 

export default CartWidget;
