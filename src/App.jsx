import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { ErrorPage } from './pages/ErrorPage';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/products'
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route path='/cart' element={<Cart cart={cart} />} />
          <Route path='*' element={<ErrorPage message={'PAGE NOT FOUND'} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
