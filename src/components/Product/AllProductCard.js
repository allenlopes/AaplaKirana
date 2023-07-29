import React, {useState} from 'react'
import {AiOutlineEye} from 'react-icons/ai'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import './AllProductCard.css'

const AllProductCard = ({ data }) => {

  const [show, setShow] = useState(false)
  const [qty, setqty] = useState(2)
  return (
    <div className="product">
      <div className="s1">
        <img src={data.productimage} alt={"no image"} />
      </div>

      <div className="s2">
        <h3>
          &#8377;
          {data.productprice - (data.productprice * data.discountpercent) / 100}
          <span>&#8377;{data.productprice}</span>
        </h3>
        <p>{data.productname}</p>
      </div>

      <div className="s3">
        <p>{data.counttype}</p>
      </div>
      {
      show ?          //If show is true then it shows nothing, else the div part is executed.
        <div className='addbtn'>
          <div className='qty'>
            <button onClick={() =>
            {
            if(qty>1)
            {
              setqty(qty-1)
            }
            }}>-</button>
            <p>{qty}</p>
            <button onClick={() => setqty(qty+1)}>+</button>
          </div>
        </div>
      :
        <div className="addbtn">
          <AiOutlineEye />
          <AiOutlinePlusCircle onClick={() => setShow(true)}/>
        </div>
      }

    </div>
  );
}

export default AllProductCard