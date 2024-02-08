import { Section } from '../components/Section';
import { Carousel } from '../components/Carousel';

export const Home = () => {
  return (
    <div className='home-container'>
      <Carousel />
      <Section />
    </div>
  );
};
