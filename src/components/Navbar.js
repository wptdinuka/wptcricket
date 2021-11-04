import React, {useState} from 'react';
import{ Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMoblileMenu = () => setClick(false);
    return (
        <>
         <nav className='navbar'>
         <div className='navbar-container'>
         <Link to='/' class='nav-logo' >Road to World Cup</Link>

         <div className='menu-icon' onClick={handleClick}>
             <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
             </div>
             <div class='navbar-toggle' id='mobile-menu'>
                 <span class='bar'></span>
                 <span class='bar'></span>
                 <span class='bar'></span>
                 <span class='bar'></span>
                 <span class='bar'></span>
                 <span class='bar'></span>
                 <span class='bar'></span>
                 </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                 <li className='nav-item'>
                     <Link to='/' className='nav-links' onClick={closeMoblileMenu}>
                         Home
                     </Link>
                 </li>

                 <li className='nav-item'>
                     <Link to='/news' className='nav-links' onClick={closeMoblileMenu}>
                         News
                     </Link>
                 </li>

                 <li className='nav-item'>
                     <Link to='/schedule' className='nav-links' onClick={closeMoblileMenu}>
                         Schedule
                     </Link>
                 </li>

                 <li className='nav-item'>
                     <Link to='/results' className='nav-links' onClick={closeMoblileMenu}>
                         Results
                     </Link>
                 </li>

                 <li className='nav-item'>
                     <Link to='/players' className='nav-links' onClick={closeMoblileMenu}>
                         Players
                     </Link>
                 </li>

                 <li className='nav-item'>
                     <Link to='/records' className='nav-links' onClick={closeMoblileMenu}>
                         Records
                     </Link>
                 </li>

            
                 
                 
                  
                  </ul>

         </div>
         </nav>

        </>
    )
}

export default Navbar
