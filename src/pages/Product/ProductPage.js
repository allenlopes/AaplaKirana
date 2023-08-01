import React from 'react'
import { Link, useParams } from 'react-router-dom';
import img1 from '../../assets/Images/1.png';
import img2 from '../../assets/Images/2.png';
import img3 from "../../assets/Images/3.png";
import img4 from "../../assets/Images/4.png";
import { useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar'
import {BsChevronLeft} from 'react-icons/bs'

import './ProductPage.css'
import '../../App.css'


const ProductPage = () => {
  const {prodid} = useParams()
  const [imageset, setimageset] = React.useState(null)
  const [productdata, setproductdata] = React.useState([])
  const [activeimg, setactiveimg] = React.useState({})
  const [count, setcount] = React.useState(1)


  const getproductdatabyid = async () => {
    let temp = {
      "Code": 200,
      "Message": "Success",
      "Data": [
        {
                    "ProductId": 1,
                    "ProductName": "Product 1",
                    "ProductDescription": "Product 1 Description",
                    "ProductImage": [
                      {
                        id : 1,
                        image : img1
                      },
                      {
                        id : 2,
                        image : img2
                      },
                      {
                        id : 3,
                        image : img3
                      },
                      {
                        id : 4,
                        image : img4
                      }
                    ],
                    "ProductCode": "P1",
                    "ProductCategory": "Category 1",
                    "ProductSubCategory": "Sub Category 1",
                    "ProductBrand": "Brand 1",
                    "ProductColor": "Color 1",
                    "ProductSize": "Size 1",
                    "ProductWeight": "Weight 1",
                    "ProductMaterial": "Material 1",
                    "ProductQuantity": 10,
                    "ProductUnit": "Unit 1",
                    "ProductPrice": 100,
                    "SalesPrice": 80,
                    "ProductDiscount": 20,
                    "ProductDiscountType": "Percentage",
                    "ProductTax": 20,
                    "ProductTaxType": "Percentage",
                    "ProductShippingCharge": 20,
                    "ProductShippingChargeType": "Percentage",
                    "ProductShippingTime": "1-2 days",
                    "ProductShippingTimeType": "Days",
                    "ProductShippingLocation": "Location 1",
                    "ProductShippingLocationType": "Country",
                    "ProductShippingReturnPolicy": "Return Policy 1",
                    "ProductShippingReturnPolicyType": "Days",
                    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
                    "ProductShippingReturnPolicyDescriptionType": "Days",
        }
      ]
    }


    if(temp.Code == 200)
    {
      setimageset(temp.Data[0].ProductImage)
      setproductdata(temp.Data[0])
      setactiveimg(temp.Data[0].ProductImage[0])
    }
  }


  useEffect(() => {
    getproductdatabyid()
  },[])

  return (
    <div className="productpage">
      {/* <h1>Product id is - {prodid}</h1>
      <p>
        {JSON.stringify(productdata)}
      </p> */}

      <Navbar />

      <div className="pc1">
        <Link to="/">
          <button className='goback'>
            <BsChevronLeft className='backicon'/>
            Go Back
          </button>
        </Link>

        {/* div c11 contains the images section */}
        <div className="c11">
          <div className="imgset">
            {imageset &&
              imageset?.map(
                (
                  item,
                  index // this means imageset is not null and imageset has some values then i will map it 1 by 1
                ) => {
                  return (
                    // suppose we have 3 images in imageset then it will be returned here.
                    <div
                      className="imgsmall"
                      onClick={() => {
                        setactiveimg(item); // Suppose if we click on any image then this onClick will set that image as active image.
                      }}
                    >
                      <img
                        src={item.image}
                        alt=""
                        // for className if the activeimg.id matches with current item's id then give it a className of active; else don't give any className.
                        className={activeimg.id == item.id ? "active" : ""}
                      />
                    </div>
                  );
                }
              )}
          </div>
          {/* Our active image will be shown in the div with classname "imgbig" */}
          <div className="imgbig">
            <img src={activeimg.image} alt="" />
          </div>
        </div>


        {/* div c12 contains the text section like product name, add to cart, etc..*/}
        <div className="c12">
          <h1 className="head1">{productdata.ProductName}</h1>

          <div className="c12_1">
            <p className="price">
              <span >&#8377;{productdata.SalesPrice * count}</span>
              <span className='linethrough'>&#8377;{productdata.ProductPrice * count}</span>
            </p>

            <div className="incrdecr">
              <button
                onClick={() => {
                  if (count > 1) {
                    setcount(count - 1);
                  }
                }}
              >
                -
              </button>

              <p> {count} </p>

              <button
                onClick={() => {
                  if (count < 10) {
                    setcount(count + 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>

          <div className="btncontainer">
            <button
              onClick={() => {
                alert("Added to cart");
              }}
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                alert("Buy Now");
              }}
            >
              Buy Now
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ProductPage