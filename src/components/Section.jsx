import { Link } from 'react-router-dom';

export const Section = () => {
  return (
    <div className='section-container'>
      <div className='male-container-text'>
        Men&apos;s clothing
        <Link to='men' className='see-now-link'>
          See now &gt;&gt;
        </Link>
      </div>
      <div className='male-container-image'>
        {' '}
        <img src='/male_model.jpg' />
      </div>
      <div className='female-container-image'>
        {' '}
        <img src='/female_model.jpg' />
      </div>
      <div className='female-container-text'>
        {' '}
        Women&apos;s clothing
        <Link to='women' className='see-now-link'>
          See now &gt;&gt;
        </Link>
      </div>
    </div>
  );
};
