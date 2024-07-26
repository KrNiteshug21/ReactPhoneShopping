import { RiDeleteBinLine } from "react-icons/ri";
import DataContext from "../Context/DataContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const CartProduct = ({ cartItem, index }) => {
  const { handleDeleteCart } = useContext(DataContext);

  return (
    <motion.div
      className="cartProduct"
      layout
      initial={{ x: 20, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          ease: "easeOut",
          delay: index * 0.15,
          duration: 0.25,
        },
      }}
      exit={{
        x: 20,
        opacity: 0,
        transition: {
          ease: "easeOut",
          duration: 0.25,
        },
      }}
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
