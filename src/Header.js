import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./index.css";
import DataContext from "./Context/DataContext";
import { useContext } from "react";

const Header = () => {
  const { cartItems } = useContext(DataContext);

  return (
    <div className="headerContainer">
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
    </div>
  );
};

export default Header;
