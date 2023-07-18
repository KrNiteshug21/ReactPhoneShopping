import Header from "./Header";
import Footer from "./Footer";
import Content from "./componenets/Content";
import CartPage from "./componenets/CartPage";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";
import PhoneDetails from "./componenets/PhoneDetails";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path={`/:id`} element={<PhoneDetails />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
