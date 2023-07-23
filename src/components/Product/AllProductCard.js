import React from 'react'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import './AllProductCard.css'

const AllProductCard = ({ data }) => {
  return (
    <div className="product">

      <div className="s1">
        <img src={data.productimage} alt={"no image"} />
      </div>

      <div className="s2">
        <h3>
          {
          data.productprice - (data.productprice * data.discountpercent / 100)
          }
          <span>&#8377;{data.productprice}</span>
        </h3>
        <p>
          {
            data.productname
          }
        </p>
      </div>

      <div className="s3">
        <p>{data.counttype}</p>
      </div>

      <div className="addbtn">
        <AiOutlineEye />
        <AiOutlinePlusCircle />
      </div>
    </div>
  );
}

export default AllProductCard