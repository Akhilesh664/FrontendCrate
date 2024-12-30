import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import About from './components/about/About';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Pagenotfound from './components/pagenotfound/Pagenotfound';

function App() {
 
  return (
  <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
