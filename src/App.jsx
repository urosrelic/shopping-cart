import './App.css';
import { Carousel } from './components/Carousel';
import { Header } from './components/Header';
import { MenSection } from './components/MenSection';
import { WomenSection } from './components/WomenSection';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <Carousel />
        <MenSection />
        <WomenSection />
      </div>
    </div>
  );
}

export default App;
