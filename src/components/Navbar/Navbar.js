import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpeg'
import {AiOutlineSearch} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {HiOutlineUser} from 'react-icons/hi'
import Dropdown from 'react-bootstrap/Dropdown'

import { IconContext } from 'react-icons';

const Navbar = () => {
    const [cartquantity, setcartquantity] = useState(0)
  return (
    <nav>
      <div className="s1">
        <img src={logo} alt="logo" className="logo" />

        <div className="searchbar">
          <input
            type="text"
            placeholder="Search for Products"
            className="search"
          />
          <button>
            <IconContext.Provider value={{ className: "top-react-icons" }}>
              <AiOutlineSearch />
            </IconContext.Provider>
          </button>
        </div>

        <div className="right">
          <div className="cart">
            <span className="qty">{cartquantity} </span>
            <IconContext.Provider value={{ className: "top-react-icons" }}>
              <FiShoppingCart />
            </IconContext.Provider>
          </div>
          <IconContext.Provider value={{ className: "top-react-icons" }}>
            <HiOutlineUser />
          </IconContext.Provider>
        </div>
      </div>

      {/* The following class 's2' is used as Navigation bar which conatins - categories tab, About us tab, Contact us tab and More tab*/}
      <div className="s2">
        {/* The following Dropdown code has been taken from "react bootstrap dropdown" code from their official website and edited*/}
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            Categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Fresh Vegetables</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Fresh Fruits</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Household Requirements
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <a>About Us</a>

        <a>Contact Us</a>

        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            More
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">FAQ</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Privacy Policy</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Terms & Conditions</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}

export default Navbar