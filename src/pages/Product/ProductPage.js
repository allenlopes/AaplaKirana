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
import Footer1 from '../../components/Footer/Footer1';
import Footer2 from "../../components/Footer/Footer2";
import {AiOutlineStar} from 'react-icons/ai';
import ProductSlider from '../../components/Product/ProductSlider';


const ProductPage = () => {
  const {prodid} = useParams()
  const [imageset, setimageset] = React.useState(null)
  const [productdata, setproductdata] = React.useState([])
  const [activeimg, setactiveimg] = React.useState({})
  const [count, setcount] = React.useState(1)
  const [showreview, setshowreview] = React.useState(false)

  const getproductdatabyid = async () => {
    let temp = {
      "Code": 200,
      "Message": "Success",
      "Data": [
        {
          "ProductId": 1,
          "ProductName": "Product 1",
          "ProductDescription":
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "ProductImage": [
            {
              id: 1,
              image: img1,
            },
            {
              id: 2,
              image: img2,
            },
            {
              id: 3,
              image: img3,
            },
            {
              id: 4,
              image: img4,
            },
          ],
          ProductCode: "P1",
          ProductCategory: "Category 1",
          ProductSubCategory: "Sub Category 1",
          ProductBrand: "Brand 1",
          ProductColor: "Color 1",
          ProductSize: "Size 1",
          ProductWeight: "Weight 1",
          ProductMaterial: "Material 1",
          ProductQuantity: 10,
          ProductUnit: "Unit 1",
          ProductPrice: 100,
          SalesPrice: 80,
          ProductDiscount: 20,
          ProductDiscountType: "Percentage",
          ProductTax: 20,
          ProductTaxType: "Percentage",
          ProductShippingCharge: 20,
          ProductShippingChargeType: "Percentage",
          ProductShippingTime: "1-2 days",
          ProductShippingTimeType: "Days",
          ProductShippingLocation: "Location 1",
          ProductShippingLocationType: "Country",
          ProductShippingReturnPolicy: "Return Policy 1",
          ProductShippingReturnPolicyType: "Days",
          ProductShippingReturnPolicyDescription: "Return Policy Description 1",
          ProductShippingReturnPolicyDescriptionType: "Days",
          "ProductReviews": [
            {
              "ReviewId": 1,
              "Name": "Allen Lopes",
              "Email": "",
              "Rating": 5,
              "Date": "2022-08-02",
              "Review":
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
              "ReviewId": 2,
              "Name": "Sally Dmello",
              "Email": "",
              "Rating": 4,
              "Date": "2022-08-02",
              "Review":
                "Simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
              "ReviewId": 3,
              "Name": "Sallasation",
              "Email": "",
              "Rating": 3,
              "Date": "2022-08-02",
              "Review":
                "The industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
          ]
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
    window.scroll(0,0)
  },[])

  const [rating, setrating] = React.useState(0)

    const products = [
      {
        id: 1,
        productimage: img1,
        productname: "Product 1",
        productprice: 100,
        counttype: "1 each",
        discountpercent: 12,
      },

      {
        id: 2,
        productimage: img2,
        productname: "Product 2",
        productprice: 200,
        counttype: "1 per kg",
        discountpercent: 12,
      },

      {
        id: 3,
        productimage: img3,
        productname: "Product 3",
        productprice: 400,
        counttype: "1 per kg",
        discountpercent: 12,
      },

      {
        id: 4,
        productimage: img4,
        productname: "Product 4",
        productprice: 400,
        counttype: "1 each",
        discountpercent: 19,
      },

      {
        id: 5,
        productimage: img1,
        productname: "Product 5",
        productprice: 100,
        counttype: "1 each",
        discountpercent: 12,
      },

      {
        id: 6,
        productimage: img2,
        productname: "Product 6",
        productprice: 200,
        counttype: "1 per kg",
        discountpercent: 12,
      },

      {
       id: 7,
        productimage: img3,
        productname: "Product 7",
        productprice: 400,
        counttype: "1 per kg",
        discountpercent: 12,
      },

      {
        id: 8,
        productimage: img4,
        productname: "Product 8",
        productprice: 400,
        counttype: "1 each",
        discountpercent: 19,
      },

      {
        id: 9,
        productimage: img1,
        productname: "Product 9",
        productprice: 100,
        counttype: "1 each",
        discountpercent: 12,
      },

      {
        id: 10,
        productimage: img2,
        productname: "Product 10",
        productprice: 200,
        counttype: "1 per kg",
        discountpercent: 12,
      },

      {
        id: 11,
        productimage: img3,
        productname: "Product 11",
        productprice: 400,
        counttype: "1 per kg",
        discountpercent: 12,
      },

      {
        id: 12,
        productimage: img4,
        productname: "Product 12",
        productprice: 400,
        counttype: "1 each",
        discountpercent: 19,
      },
    ];

  return (
    <div className="productpage">
      {/* <h1>Product id is - {prodid}</h1>
      <p>
        {JSON.stringify(productdata)}
      </p> */}

      <Navbar />

      {/* div with className = pc2*/}
      <div className="pc1">
        <Link to="/">
          <button className="goback">
            <BsChevronLeft className="backicon" />
            Go Back
          </button>
        </Link>

        {/* div c11 contains the images section */}
        <div className="c11">
          <div className="imgset">
            {imageset &&
              imageset?.map((item, index) => {
                // this means imageset is not null and imageset has some values then i will map it 1 by 1
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
              })}
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
              <span>&#8377;{productdata.SalesPrice * count}</span>
              <span className="linethrough">
                &#8377;{productdata.ProductPrice * count}
              </span>
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

      {/* div with className = pc2*/}
      <div className="pc2">
        {showreview ? (
          <div className="tabs">
            <button
              className="inactive"
              onClick={() => {
                setshowreview(false);
              }}
            >
              Description
            </button>

            <button
              className="active"
              onClick={() => {
                setshowreview(true);
              }}
            >
              Reviews
            </button>
          </div>
        ) : (
          <div className="tabs">
            <button
              className="active"
              onClick={() => {
                setshowreview(false);
              }}
            >
              Description
            </button>

            <button
              className="inactive"
              onClick={() => {
                setshowreview(true);
              }}
            >
              Reviews
            </button>
          </div>
        )}

        {showreview ? (
          <div className="reviewcontainer">
            <form>
              <div className="formgroup">
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>

              <div className="formgroup">
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>

              <div className="formgroup">
                <label htmlFor="">Review</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>

              {/* Creating rating stars for giving stars to the product */}
              <div className="formgroup">
                <label htmlFor="">Rating</label>
                <div className="rating">
                  <div
                    className="star"
                    onClick={() => {
                      setrating(1);
                    }}
                  >
                    {rating >= 1 ? (
                      <AiOutlineStar className="staractive" />
                    ) : (
                      <AiOutlineStar className="starinactive" />
                    )}
                  </div>

                  <div
                    className="star"
                    onClick={() => {
                      setrating(2);
                    }}
                  >
                    {rating >= 2 ? (
                      <AiOutlineStar className="staractive" />
                    ) : (
                      <AiOutlineStar className="starinactive" />
                    )}
                  </div>

                  <div
                    className="star"
                    onClick={() => {
                      setrating(3);
                    }}
                  >
                    {rating >= 3 ? (
                      <AiOutlineStar className="staractive" />
                    ) : (
                      <AiOutlineStar className="starinactive" />
                    )}
                  </div>

                  <div
                    className="star"
                    onClick={() => {
                      setrating(4);
                    }}
                  >
                    {rating >= 4 ? (
                      <AiOutlineStar className="staractive" />
                    ) : (
                      <AiOutlineStar className="starinactive" />
                    )}
                  </div>

                  <div
                    className="star"
                    onClick={() => {
                      setrating(5);
                    }}
                  >
                    {rating >= 5 ? (
                      <AiOutlineStar className="staractive" />
                    ) : (
                      <AiOutlineStar className="starinactive" />
                    )}
                  </div>
                </div>
              </div>

              <button>Submit</button>
            </form>

            <div className="allreview">
              <h1 className="head1">Product Reviews</h1>
              {productdata.ProductReviews &&
                productdata.ProductReviews.map((item, index) => {
                  return (
                    <div className="review">
                      <div className="reviewhead">
                        <p className="name">{item.Name}</p>

                        {/* Creating rating for seeing which user had given how much rating in reviews section */}
                        <div className="rating1">
                          <div className="star">
                            {item.Rating >= 1 ? (
                              <AiOutlineStar className="staractive" />
                            ) : (
                              <AiOutlineStar className="starinactive" />
                            )}
                          </div>

                          <div className="star">
                            {item.Rating >= 2 ? (
                              <AiOutlineStar className="staractive" />
                            ) : (
                              <AiOutlineStar className="starinactive" />
                            )}
                          </div>

                          <div className="star">
                            {item.Rating >= 3 ? (
                              <AiOutlineStar className="staractive" />
                            ) : (
                              <AiOutlineStar className="starinactive" />
                            )}
                          </div>

                          <div className="star">
                            {item.Rating >= 4 ? (
                              <AiOutlineStar className="staractive" />
                            ) : (
                              <AiOutlineStar className="starinactive" />
                            )}
                          </div>

                          <div className="star">
                            {item.Rating >= 5 ? (
                              <AiOutlineStar className="staractive" />
                            ) : (
                              <AiOutlineStar className="starinactive" />
                            )}
                          </div>
                        </div>

                        <span className="date">{item.Date}</span>
                      </div>

                      <div className="reviewbody">{item.Review}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <p className="desc">{productdata.ProductDescription}</p>
        )}
      </div>

      {/* Slider container for product slider */}
      <div className="slidercont">
        <ProductSlider products={products} categoryname="Related Products" />
      </div>

      <div className="slidercont">
        <ProductSlider products={products} categoryname="Explore More" />
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default ProductPage