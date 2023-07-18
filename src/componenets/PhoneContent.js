import Phone from "./Phone";
import "../index.css";

const PhoneContent = ({ phones }) => {
  return (
    <section className="phoneContent">
      {phones.map((phone) => (
        <Phone key={phone.id} phone={phone} />
      ))}
    </section>
  );
};

export default PhoneContent;
