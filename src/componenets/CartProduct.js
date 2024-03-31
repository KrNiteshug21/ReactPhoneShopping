import { RiDeleteBinLine } from "react-icons/ri";
import DataContext from "../Context/DataContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const CartProduct = ({ cartItem }) => {
  const { handleDeleteCart } = useContext(DataContext);

  return (
    <motion.div
      className="cartProduct"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
    >
      <div className="cartProductImage">
        <img src={cartItem.images[0]} alt={cartItem.title} />
      </div>
      <div className="cartProductDecription" style={{ wordWrap: "break-word" }}>
        <h3>{cartItem.title}</h3>
        <p>{cartItem.description} </p>
      </div>
      <div className="cartProductPrice">
        <h2>${cartItem.price.toFixed(2)}</h2>
      </div>
      <div>
        <button
          className="deleteBtn"
          onClick={() => handleDeleteCart(cartItem)}
        >
          <RiDeleteBinLine size={36} />
        </button>
      </div>
    </motion.div>
  );
};

export default CartProduct;
