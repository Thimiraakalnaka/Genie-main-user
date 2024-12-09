import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Productview from './pages/Productview';
import Homepage from './pages/Homepage';
import { useState } from 'react';
import Login from './layouts/Login';

function App() {

  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar setOpen={setOpen}/>
      {open && <Login open={open} setOpen={setOpen}/>}
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/productview/:productId' element={<Productview/>}/>
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
