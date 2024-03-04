import { useState, useEffect } from 'react';

export const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const images = [
    '/public/carousel_image_1.jpg',
    '/public/carousel_image_2.jpg',
  ];

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='image-slider'>
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className='slider-image'
      />
      <button onClick={prevSlide} className='slide-button' id='prev-slide'>
        Previous
      </button>
      <button onClick={nextSlide} className='slide-button' id='next-slide'>
        Next
      </button>
    </div>
  );
};
