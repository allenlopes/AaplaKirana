import React from 'react'
import payimg from '../../assets/pay.png';

const Footer2 = () => {
  return (
    <div className="footer">
      <div className="footerin1"></div>
      <div className="footerin2">
        <h3>© Copyright 2023 AllenGrocery, Inc. All rights Reserved.</h3>
        <img src={payimg} alt="payimg" />
      </div>
    </div>
  );
}

export default Footer2