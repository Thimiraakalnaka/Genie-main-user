import './App.css';
import Cover from './layouts/Cover';
import Navbar from './layouts/Navbar';
import Productlist from './layouts/Productlist';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cover/>
      <Productlist/>
    </div>
  );
}

export default App;
