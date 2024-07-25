import { RiDeleteBinLine } from "react-icons/ri";
import DataContext from "../Context/DataContext";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CartProduct = ({ cartItem, index }) => {
  const { handleDeleteCart } = useContext(DataContext);

  return (
    <AnimatePresence key={index}>
      <motion.div
        className="cartProduct"
        layout
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{
          ease: "easeOut",
          delay: index * 0.15,
          duration: 0.25,
          type: "spring",
          mass: 0.35,
          damping: 10,
          stiffness: 100,
        }}
      >
        <div className="cartProductImage">
          <img src={cartItem.images[0]} alt={cartItem.title} />
        </div>
        <div
          className="cartProductDecription"
          style={{ wordWrap: "break-word" }}
        >
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
    </AnimatePresence>
  );
};

export default CartProduct;
