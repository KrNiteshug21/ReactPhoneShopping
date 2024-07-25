import CartProduct from "./CartProduct";
import "../index.css";
import { motion } from "framer-motion";

const CartItem = ({ cartItems }) => {
  return (
    <motion.div className="cartItemsContainer">
      {cartItems.map((cartItem, index) => (
        <CartProduct index={index} key={cartItem.id} cartItem={cartItem} />
      ))}
    </motion.div>
  );
};

export default CartItem;
