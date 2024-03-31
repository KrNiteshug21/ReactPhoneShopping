import { FaShoppingCart } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useParams, Link } from "react-router-dom";
import DataContext from "../Context/DataContext";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

const PhoneDetails = () => {
  const { phones, handleAddCart } = useContext(DataContext);
  const { id } = useParams();
  const [phone, setPhone] = useState();
  useEffect(() => {
    const phone = phones.find((phone) => phone?.id.toString() === id);
    setPhone(phone);
  }, [phone, id, phones]);

  const [phoneId, setPhoneId] = useState(Number(id));
  const handleForward = () => {
    phoneId === phones.length - 1
      ? setPhoneId(0)
      : setPhoneId((prev) => prev + 1);
  };
  const handleBackward = () => {
    phoneId === 0
      ? setPhoneId(phones.length - 1)
      : setPhoneId((prev) => prev - 1);
  };

  return (
    <motion.main
      className="phoneDetailsPage setWidth"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <div className="phoneDetailsContainer">
        <section className="phoneDetailsImage">
          <img src={phone?.images[0]} alt={phone?.title} />
        </section>
        <section className="phoneDescription">
          <div className="phoneTitle">
            <h1 style={{ wordWrap: "break-word" }}>{phone?.title}</h1>
          </div>
          <div>
            <h2>${phone?.price.toFixed(2)}</h2>
          </div>
          <div>
            <h3>Description</h3>
            <p>{phone?.description}</p>
          </div>
          <div className="phoneBrand">
            <h3>Brand</h3>
            <p>{phone?.brand}</p>
          </div>
          <div>
            <h3>Size</h3>
            <p>{phone?.size}</p>
          </div>
          <div>
            <h3>Camera</h3>
            <p>{phone?.camera}</p>
          </div>
          <div>
            <h3>CPU</h3>
            <p>{phone?.cpu}</p>
          </div>
          <div>
            <h3>Memory</h3>
            <p>{phone?.memory}</p>
          </div>
          <div>
            <h3>Display</h3>
            <p>{phone?.display}</p>
          </div>
          <div>
            <h3>Battery</h3>
            <p>{phone?.battery}</p>
            <hr className="hrLine"></hr>
          </div>
          <div className="addToCartBtn" onClick={() => handleAddCart(phone)}>
            <FaShoppingCart size={30} />
            <h2>ADD TO CART</h2>
          </div>
        </section>
      </div>
      <section className="navigation">
        <button className="navigationBtn" onClick={handleBackward}>
          <Link to={`/${phoneId}`}>
            <FiArrowLeft size={32} />
            <h2>Previous</h2>
          </Link>
        </button>
        <button className="navigationBtn" onClick={handleForward}>
          <Link to={`/${phoneId}`}>
            <h2>Next</h2>
            <FiArrowRight size={32} />
          </Link>
        </button>
      </section>
    </motion.main>
  );
};

export default PhoneDetails;
