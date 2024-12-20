import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Productview from './pages/Productview';
import Homepage from './pages/Homepage';
import { useState } from 'react';
import Login from './layouts/Login';
import Register from './layouts/Register';

function App() {

  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const toggleToRegister = () => setShowLogin(false);
  const toggleToLogin = () => setShowLogin(true);

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar setOpen={setOpen}/>
      {showLogin ? (
        <Login open={open} setOpen={setOpen} toggleToRegister={toggleToRegister} />
      ) : (
        <Register open={open} setOpen={setOpen} toggleToLogin={toggleToLogin} />
      )}
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
