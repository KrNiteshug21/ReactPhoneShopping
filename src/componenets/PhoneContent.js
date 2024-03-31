import Phone from "./Phone";
import "../index.css";
import { motion } from "framer-motion";

const PhoneContent = ({ phones }) => {
  return (
    <motion.section
      className="phoneContent"
      // initial={{ x: "40vw", opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{ ease: "easeOut", delay: 1 }}
    >
      {phones.map((phone, index) => (
        <Phone key={phone.id} index={index} phone={phone} />
      ))}
    </motion.section>
  );
};

export default PhoneContent;
