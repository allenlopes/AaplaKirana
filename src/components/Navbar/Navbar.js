import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpeg'
import {AiOutlineSearch} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'

const Navbar = () => {
    const [cartquantity, setcartquantity] = useState(0)
  return (
    <nav>
        <div className='s1'>
            <img src={logo} alt='logo' className='logo'/>

            <div className='searchbar'>
                <input type='text'
                placeholder='Search for Products'
                className='search' />
                <button> {AiOutlineSearch} </button>
            </div>

            <div className='right'>
                <div className='cart'>
                    <span className='qty'>{cartquantity} </span>
                    {FiShoppingCart}
                </div>
            </div>
        </div>


        <div className='s2'>

        </div>
    </nav>
  )
}

export default Navbar