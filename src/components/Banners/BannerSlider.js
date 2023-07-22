import React from 'react'
import Slider from 'react-slick';
import './BannerSlider.css'

const BannerSlider = () => {
    const data = [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        title:
          "Fresh Vegetables, Fruits & your daily household needs at your doorstep",
        description:
          "From Cherries to Berries, from Milk to Ghee, In our Grocery shop, there's plenty to see!",
        button: "https://www.google.com",
      },

      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1646668947240-a154d4d6c766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        title:
          "Fresh Vegetables, Fruits & your daily household needs at your doorstep",
        description:
          "We deliver fresh vegetables, fruits & your daily household needs within minutes you order them!",
        button: "https://www.google.com",
      },
    ];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <div className='bannerslider'>BannerSlider
    <Slider className='bannerslider' {...settings}>
        {
            data.map(item=> {
                return(
                    <div className='imagecontainer' key={item.id}>
                        <img src={item.image} alt='noimg' />
                        <div className='content'>
                            <h1>{item.title}</h1>
                            <span>{item.description}</span>
                            <button>Shop More</button>
                        </div>
                    </div>
                )
            })
        }
    </Slider>
    </div>
  )
}

export default BannerSlider