import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import Aboutus from './components/aboutus/Aboutus';
import Contactus from './components/conatctus/Contactus';
import Contactlist from './components/contactlist/Contactlist';

function App() {
  // const course="Node js";
  return (
  //  <>
  //     <div className='head'>
  //       Welcome to <span style={{color:"red",fontSize:"20px"}}> recat js .</span>
  //     </div>
  //     <div>
  //       Hallo {course}
  //       <br />
  //      <input type="submit" value="React" className='btn btn-primary' />
        
  //     </div>
  //     </>

  <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="contact-list" element={<Contactlist />} />
        <Route path="contact-us" element={<Contactus />} />
      </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
