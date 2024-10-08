import React from 'react'
import { useGlobalContext } from './context'
import {FaShoppingCart} from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <h3>useReducer</h3>
        <div className='nav-container'>
        <FaShoppingCart size ={30}/>
          <div className='amount-container'>
            <p className='total-amount'>3</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
