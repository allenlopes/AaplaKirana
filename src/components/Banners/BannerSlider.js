import React from 'react'
import Slider from 'react-slick';
import './BannerSlider.css'

const BannerSlider = () => {
    const data = [
      {
        id: 1,
        image: "https://unsplash.com/photos/D6Tu_L3chLE",
        title:
          "Fresh Vegetables, Fruits & your daily household needs at your doorstep",
        description:
          "We deliver fresh vegetables, fruits & your daily household needs within minutes you order them!",
        button: "https://www.google.com",
      },

      {
        id: 2,
        image: "https://unsplash.com/photos/D6Tu_L3chLE",
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
                            <p>{item.description}</p>
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