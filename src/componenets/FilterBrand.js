import BrandsList from "./BrandsList";
import "../index.css";
import DataContext from "../Context/DataContext";
import { useContext } from "react";

const FilterBrand = () => {
  const { brands } = useContext(DataContext);

  return (
    <section className="filterBrandContainer">
      <div className="filterBrandHeading">
        <h1>Brands</h1>
      </div>
      <form className="brandForm">
        {brands.map((brand) => {
          return <BrandsList key={brand.id} brand={brand} />;
        })}
      </form>
    </section>
  );
};

export default FilterBrand;
