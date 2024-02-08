import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Products } from './pages/Products';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          {/* <Route path='jewelry' element={} /> */}
          {/* <Route path='men' element={} /> */}
          {/* <Route path='women' element={} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
