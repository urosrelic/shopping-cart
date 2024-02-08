import './App.css';
import { Carousel } from './components/Carousel';
import { Header } from './components/Header';
import { Section } from './components/Section';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <Carousel />
        <Section />
      </div>
    </div>
  );
}

export default App;
