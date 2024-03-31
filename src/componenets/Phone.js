import "../index.css";
import { Link } from "react-router-dom";
import DataContext from "../Context/DataContext";
import { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  hidden: {
    translateY: 100,
    opacity: 0,
  },
  visible: {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      // delay: 0.25,
    },
  },
};

const Phone = ({ phone, index }) => {
  const { handleAddCart } = useContext(DataContext);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });

  return (
    <motion.div
      ref={ref}
      className="phone"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <img src={phone.images[0]} alt={phone.title} />
      <Link to={`/${phone.id}`}> {phone.title}</Link>
      <h2>${phone.price.toFixed(2)}</h2>
      <p>{phone.description}</p>
      <button className="cartBtn" onClick={() => handleAddCart(phone)}>
        Add To cart
      </button>
    </motion.div>
  );
};

export default Phone;
