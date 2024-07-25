import Header from "./Header";
import Footer from "./Footer";
import Content from "./componenets/Content";
import CartPage from "./componenets/CartPage";
import "./index.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";
import PhoneDetails from "./componenets/PhoneDetails";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <DataProvider>
        <Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Content />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<PhoneDetails />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
