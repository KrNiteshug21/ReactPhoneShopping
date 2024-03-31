import "../index.css";
import DataContext from "../Context/DataContext";
import { useContext } from "react";
import { motion } from "framer-motion";

const SearchFilter = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <motion.section
      className="searchFilter"
      // initial={{ x: "-40vw", opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{ ease: "easeOut" }}
    >
      <form className="searchForm">
        <h2>Search</h2>
        <input
          type="text"
          value={search}
          placeholder="Search any mobile phone"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </motion.section>
  );
};

export default SearchFilter;
