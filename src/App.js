import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/mainComponent/Navbar/Navbar';
import { Home } from './pages/Home';
import { ContactUs } from './components/mainComponent/ContactUs/ContactUs';
import { Quote } from './components/mainComponent/Quote/Quote';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
     
        </Routes>
       <ContactUs/>
      </BrowserRouter>
    </div>
  );
}

export default App;
