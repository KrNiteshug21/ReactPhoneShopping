import { RiDeleteBinLine } from "react-icons/ri";
import DataContext from "../Context/DataContext";
import { useContext } from "react";

const CartProduct = ({ cartItem }) => {
  const { handleDeleteCart } = useContext(DataContext);

  return (
    <div className="cartProduct">
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
    </div>
  );
};

export default CartProduct;
