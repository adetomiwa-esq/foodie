import { MenuList } from './components/MenuList';
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home/Home';
import Menu from './Menu/Menu';
import Offers from './Offers/Offers';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/offers' element={<Offers />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
