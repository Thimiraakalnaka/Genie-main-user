import './App.css';
import Cover from './layouts/Cover';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Productlist from './layouts/Productlist';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cover/>
      <Productlist/>
      <Footer/>
    </div>
  );
}

export default App;
