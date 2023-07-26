import React from 'react'
import payimg from '../../assets/pay.png';
import logo from '../../assets/logo.jpeg';
import social from '../../assets/social.png';
import {HiOutlineMail} from 'react-icons/hi';
import {AiOutlineSend} from 'react-icons/ai';
import './Footer2.css';

const Footer2 = () => {
  return (
    <div className="footer">
      <div className="footerin1">
        <div className="f1">
          <img src={logo} alt="logo" className="logo" />
          <p>
            Fit Grocery is a leading online grocery store in INDIA. We are
            committed to providing the best quality products at the best price.
          </p>
          <img src={social} alt="social" className="social" />
        </div>

        <div className="f2">
          <h3> About Us</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Our Team</p>
          <p>Customer Support</p>
        </div>

        <div className="f2">
          <h3>Our Information</h3>
          <p>Privacy Policy Update</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy Update</p>
          <p>Privacy Policy Update</p>
          <p>Site Map</p>
        </div>

        <div className="f2">
          <h3>Community</h3>
          <p>Privacy Policy Update</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy Update</p>
          <p>Privacy Policy Update</p>
          <p>Site Map</p>
        </div>

        <div className="f2">
          <h3>Subscribe Now</h3>
          <p>Subscribe your email for newsletter and etc.</p>
          <div className="inputcontainer">
            <div className="icon">
              <HiOutlineMail />
            </div>
            <input type="text" placeholder="Enter your email" />
            <div className="icon2">
              <AiOutlineSend />
              </div>
          </div>
        </div>
      </div>

      <div className="footerin2">
        <h3>© Copyright 2023 AllenGrocery, Inc. All rights Reserved.</h3>
        <img src={payimg} alt="payimg" />
      </div>
    </div>
  );
}

export default Footer2