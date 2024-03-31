import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./index.css";
import DataContext from "./Context/DataContext";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { cartItems } = useContext(DataContext);

  return (
    <AnimatePresence>
      <motion.div
        className="headerContainer"
        initial={{ y: "-10vh" }}
        animate={{ y: 0 }}
        exit={{ x: "-100vw" }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <header className="header setWidth">
          <Link to="/">
            <div className="heading">
              <h2>ECommerce</h2>
            </div>
          </Link>
          <Link to="/cart">
            <div className="cartContainer">
              <AiOutlineShoppingCart size={28} />
              <h2>Cart {cartItems.length ? `(${cartItems.length})` : ""}</h2>
            </div>
          </Link>
        </header>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
