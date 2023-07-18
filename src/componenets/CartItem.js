import CartProduct from "./CartProduct";
import "../index.css";

const CartItem = ({ cartItems }) => {
  return (
    <div className="cartItemsContainer">
      {cartItems.map((cartItem) => (
        <CartProduct key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CartItem;
