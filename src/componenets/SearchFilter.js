import "../index.css";
import DataContext from "../Context/DataContext";
import { useContext } from "react";

const SearchFilter = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <section className="searchFilter">
      <form className="searchForm">
        <h2>Search</h2>
        <input
          type="text"
          value={search}
          placeholder="Search any mobile phone"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchFilter;
