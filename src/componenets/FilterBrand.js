import BrandsList from "./BrandsList";
import "../index.css";
import DataContext from "../Context/DataContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const FilterBrand = () => {
  const { brands } = useContext(DataContext);

  return (
    <motion.section
      className="filterBrandContainer"
      // initial={{ x: "-40vw", opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{ ease: "easeOut" }}
    >
      <div className="filterBrandHeading">
        <h1>Brands</h1>
      </div>
      <form className="brandForm">
        {brands.map((brand) => {
          return <BrandsList key={brand.id} brand={brand} />;
        })}
      </form>
    </motion.section>
  );
};

export default FilterBrand;
