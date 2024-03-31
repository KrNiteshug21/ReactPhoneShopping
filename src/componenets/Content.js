import FilterPrice from "./FilterPrice";
import PhoneContent from "./PhoneContent";
import SearchFilter from "./SearchFilter";
import DataContext from "../Context/DataContext";
import "../index.css";
import { useContext } from "react";
import { motion } from "framer-motion";

const Content = () => {
  const { search, phones } = useContext(DataContext);

  return (
    <motion.div
      className="contentContainer"
      // initial={{ x: "40vw", opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // exit={{ x: "-100vw", opacity: 0 }}
      // transition={{ ease: "easeInOut", duration: 0.5 }}
    >
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
    </motion.div>
  );
};

export default Content;
