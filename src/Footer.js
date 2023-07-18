import "./index.css";

const Footer = () => {
  const date = new Date();
  return (
    <div className="footerContainer">
      <footer className="footer setWidth">
        <h3>Copyright &copy; Emre Baskan {date.getFullYear()}</h3>
      </footer>
    </div>
  );
};

export default Footer;
