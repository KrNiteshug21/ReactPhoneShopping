import FilterPrice from "./FilterPrice";
import PhoneContent from "./PhoneContent";
import SearchFilter from "./SearchFilter";
import DataContext from "../Context/DataContext";
import "../index.css";
import { useContext } from "react";

const Content = () => {
  const { search, phones } = useContext(DataContext);

  return (
    <div className="contentContainer">
      <main className="mainContent setWidth">
        <div className="filters">
          <SearchFilter />
          <FilterPrice />
        </div>
        <PhoneContent
          phones={phones.filter((phone) =>
            phone.brand.toLowerCase().includes(search.toLowerCase())
          )}
        />
      </main>
    </div>
  );
};

export default Content;
