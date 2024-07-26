import CartProduct from "./CartProduct";
import "../index.css";
import { AnimatePresence, motion } from "framer-motion";

const CartItem = ({ cartItems }) => {
  return (
    <motion.div className="cartItemsContainer">
      {cartItems.map((cartItem, index) => (
        <AnimatePresence key={index}>
          <CartProduct index={index} key={cartItem.id} cartItem={cartItem} />
        </AnimatePresence>
      ))}
    </motion.div>
  );
};

export default CartItem;
