import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import DataContext from "../Context/DataContext";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoDot, GoDotFill } from "react-icons/go";

const PhoneDetails = () => {
  const { phones, handleAddCart } = useContext(DataContext);
  const { id } = useParams();
  const [phone, setPhone] = useState();
  const [currentImage, setCurrentImage] = useState(0);
  const handleCurrImage = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const phone = phones.find((phone) => phone?.id.toString() === id);
    setPhone(phone);
  }, [phone, id, phones]);

  return (
    <motion.main
      className="phoneDetailsPage setWidth"
      // initial={{ x: "50vw", opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // exit={{ x: "-50vw", opacity: 0 }}
      // transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <div className="phoneDetailsContainer">
        <section className="phoneDetailsImage">
          <div className="carousel">
            <img src={phone?.images[currentImage]} alt="carousel" />
            <div className="carouselDots">
              {phone?.images.map((image, index) => {
                return (
                  <span onMouseEnter={() => handleCurrImage(index)} key={index}>
                    {" "}
                    {currentImage === index ? (
                      <GoDotFill size={32} />
                    ) : (
                      <GoDot size={32} />
                    )}{" "}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="addToCartBtn" onClick={() => handleAddCart(phone)}>
            <FaShoppingCart size={30} />
            <h2>ADD TO CART</h2>
          </div>
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
        </section>
      </div>
    </motion.main>
  );
};

export default PhoneDetails;
