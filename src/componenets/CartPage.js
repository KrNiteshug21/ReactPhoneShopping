import "../index.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartItem from "./CartItem";
import DataContext from "../Context/DataContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const CartPage = () => {
  const { cartItems, totalCartPrice } = useContext(DataContext);

  return (
    <motion.div
      className="cartPageContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <main className="cartPage setWidth">
        <div className="cartHeader">
          <AiOutlineShoppingCart size={30} />
          <h2>
            {"Shopping Cart".split("").map((text, i) => {
              return (
                <motion.span
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {text}
                </motion.span>
              );
            })}
          </h2>
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
    </motion.div>
  );
};

export default CartPage;
