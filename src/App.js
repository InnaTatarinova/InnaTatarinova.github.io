import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/mainComponent/Navbar/Navbar';
import { Home } from './pages/Home';
import { ContactUs } from './components/mainComponent/ContactUs/ContactUs';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<AboutUs/>} />
          <Route path="/services" exact element={<Services/>} />
        </Routes>
       <ContactUs/>
      </BrowserRouter>
    </div>
  );
}

export default App;
