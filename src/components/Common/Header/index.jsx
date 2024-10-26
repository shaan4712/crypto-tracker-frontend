import * as React from 'react';
import './styles.css';
import Stack from '@mui/material/Stack';
import Button from '../Button';
import AnchorTemporaryDrawer from './drawer';

const Header = () => {
  return (
    <div className='navbar'>
      <h1>CryptoTracker<span style={{color: 'var(--blue)'}}>.</span></h1>
      <div className='links'>
        <a href='/'>
          <p className='link'>Home</p>
        </a>
        <a href='/'>
          <p className='link'>Compare</p>
        </a>
        <a href='/'>
          <p className='link'>Watchlist</p>
        </a>
        <a href='/'>
          <Button text={"Dashboard"} 
          onClick={() => console.log("Clicked dashboard")}
          // outlined={true}
          /> 
          {/* giving value to prop  */}
        </a>
      </div>

      <div className='mobile-drawer'>
        <AnchorTemporaryDrawer />
      </div>
    </div>
  )
}

export default Header;