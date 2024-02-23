import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/mainComponent/Navbar/Navbar";
import { Home } from "./pages/Home";
import { ContactUs } from "./components/mainComponent/ContactUs/ContactUs";
import { AboutUs } from "./pages/AboutUs";
import { Services } from "./pages/Services";
import { Service_LocalMoving } from "./pages/Service_LocalMoving";
import { Service_LongDistance } from "./pages/Service_LongDistance";
import { Service_Commercial } from "./pages/Service_Commercial";
import { Service_Packing } from "./pages/Service_Packing";
import { Service_Storage } from "./pages/Service_Storage";
import { Service_Delivery } from "./pages/Service_Delivery";
import { Service_Junk } from "./pages/Service_Junk";
import { Price } from "./pages/Price";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/services" exact element={<Services />} />
          <Route
            path="/services/local"
            exact
            element={<Service_LocalMoving />}
          />
          <Route
            path="/services/longDist"
            exact
            element={<Service_LongDistance />}
          />
          <Route
            path="/services/commercial"
            exact
            element={<Service_Commercial />}
          />
          <Route path="/services/packing" exact element={<Service_Packing />} />
          <Route path="/services/storage" exact element={<Service_Storage />} />
          <Route
            path="/services/delivery"
            exact
            element={<Service_Delivery />}
          />
          <Route path="/services/junk" exact element={<Service_Junk />} />
          <Route path="/quote" exact element={<Price />} />
        </Routes>
        <ContactUs />
      </BrowserRouter>
    </div>
  );
}

export default App;
