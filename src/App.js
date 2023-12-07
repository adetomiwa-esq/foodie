import { MenuList } from './components/MenuList';
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home/Home';
import Menu from './Menu/Menu';
import Offers from './Offers/Offers';
import Todo from './Todo/Todo';
import SignUp from './signUp/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      {/* <Footer /> */}
    </Router>

  );
}

export default App;
