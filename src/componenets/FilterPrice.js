import "../index.css";
import DataContext from "../Context/DataContext";
import { useContext, useState } from "react";

const FilterPrice = () => {
  const { handlePriceFilter, removePriceFilter } = useContext(DataContext);
  const [selectedRadio, setSelectedRadio] = useState("");

  return (
    <section className="filterPriceContainer">
      <div className="filterPriceHeading">
        <h1>Price</h1>
        <button
          className="removeBtn"
          onClick={() => {
            removePriceFilter();
            selectedRadio.checked = false;
          }}
        >
          remove
        </button>
      </div>
      <form className="priceForm">
        <div className="priceRadio">
          <input
            name="price"
            type="radio"
            id="lowToHigh"
            onChange={(e) => {
              console.log("Sort Ascending called");
              handlePriceFilter(e.target.id);
              setSelectedRadio(e.target);
            }}
          />
          <label htmlFor="lowToHigh">Low to High</label>
        </div>
        <div className="priceRadio">
          <input
            name="price"
            type="radio"
            id="highToLow"
            onChange={(e) => {
              console.log("Sort Descending called");
              handlePriceFilter(e.target.id);
              setSelectedRadio(e.target);
            }}
          />
          <label htmlFor="highToLow">High to Low</label>
        </div>
      </form>
    </section>
  );
};

export default FilterPrice;
