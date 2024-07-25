import "../index.css";
import { Link } from "react-router-dom";
import DataContext from "../Context/DataContext";
import { useContext } from "react";

const Phone = ({ phone, index }) => {
  const { handleAddCart } = useContext(DataContext);

  return (
    <div className="phone">
      <img src={phone.images[0]} alt={phone.title} />
      <Link to={`/product/${phone.id}`}> {phone.title}</Link>
      <h2>${phone.price.toFixed(2)}</h2>
      <p>{phone.description}</p>
      <button className="cartBtn" onClick={() => handleAddCart(phone)}>
        Add To cart
      </button>
    </div>
  );
};

export default Phone;
