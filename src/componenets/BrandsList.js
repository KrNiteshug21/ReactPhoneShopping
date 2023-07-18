import "../index.css";

const BrandsList = ({ brand }) => {
  return (
    <div className="brandRadio">
      <input value={brand.brandName} type="checkbox" id={brand.brandName} />
      <label htmlFor={brand.brandName}>{brand.brandName}</label>
    </div>
  );
};

export default BrandsList;
