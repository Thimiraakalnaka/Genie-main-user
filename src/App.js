import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Productview from './pages/Productview';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/productview/:productId' element={<Productview/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
