import "../index.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartItem from "./CartItem";
import DataContext from "../Context/DataContext";
import { useContext } from "react";

const CartPage = () => {
  const { cartItems, totalCartPrice } = useContext(DataContext);

  return (
    <div className="cartPageContainer">
      <main className="cartPage setWidth">
        <div className="cartHeader">
          <AiOutlineShoppingCart size={40} />
          <h3>Shipping Cart</h3>
        </div>
        {cartItems.length > 0 ? (
          <CartItem cartItems={cartItems} />
        ) : (
          <div className="noProductPara">
            <h1>There is no product in your cart</h1>
          </div>
        )}
        <div className="totalPrice">
          <p>
            Total Price: <b>${totalCartPrice.toFixed(2)}</b>
          </p>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
