import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>J</span>
            <h3>Jared Marquez</h3>

<nav>
            <ul>
               
                <li>
                    <NavLink to="/portafolio" className={({isActive}) => isActive ? "active" : ""}>portafolio</NavLink>
                </li>
              
                <li>
                    <NavLink to="/curriculum" className={({isActive}) => isActive ? "active" : ""}>curriculum</NavLink>
                </li>
               
            </ul>
        </nav>


        </div>
        
        
        
    </header>
  )
}
