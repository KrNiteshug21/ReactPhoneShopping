import "./index.css";
import { motion } from "framer-motion";

const Footer = () => {
  const date = new Date();
  return (
    <motion.div
      className="footerContainer"
      initial={{ x: "-40vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <footer className="footer setWidth">
        <h3>Copyright &copy; {date.getFullYear()}</h3>
      </footer>
    </motion.div>
  );
};

export default Footer;
