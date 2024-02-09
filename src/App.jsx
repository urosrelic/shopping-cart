import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Products } from './pages/Products';

function App() {
  return (
    <div className='App'>
<<<<<<< HEAD
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
=======
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
>>>>>>> 1f0f72ec024035d62c75efdc7a6c1d9210be275a
          {/* <Route path='jewelry' element={} /> */}
          {/* <Route path='men' element={} /> */}
          {/* <Route path='women' element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
