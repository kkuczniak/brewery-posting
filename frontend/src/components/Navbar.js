import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../images/hop.svg';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          <img src={logo} alt='' />
          <h4>TO BEER OR NOT TO BEER</h4>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/review' className='nav-links' onClick={closeMobileMenu}>
              Reviews
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/guide' className='nav-links' onClick={closeMobileMenu}>
              Brewing Guide
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/recipes/:id'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Recipes
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
