import { Section } from '../components/Section';
import { ImageSlider } from '../components/ImageSlider';

export const Home = () => {
  return (
    <div className='home-container'>
      <ImageSlider />
      <Section />
    </div>
  );
};
