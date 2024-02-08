export const Header = () => {
  return (
    <div className='header-container'>
      <div className='upper-header'>
        <img id='logo' src='/logo.png' />
        <div className='links'>
          <a href='#'>Products</a>
          <a href='#'>JEWELRY</a>
          <a href='#'>Men</a>
          <a href='#'>Women</a>
          <img id='shopping-cart-icon' src='/cart.svg' />
        </div>
      </div>
      <div className='lower-header'></div>
    </div>
  );
};
