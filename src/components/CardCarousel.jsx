import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

import { imageArr } from '../constants/constants';

// { selectActiveImage }
const CardCarousel = () => {

  const [activeSlide, setActiveSlide] = useState(0);

  // const handleSlide = (next) => {
  //   setActiveSlide(next);
  //   selectActiveImage(activeSlide);
  // }

  const settings = {
    
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // className: "center",
    centerMode: true,
    // centerPadding: "60px",
    beforeChange: (current, next) => setActiveSlide(next),
    // beforeChange: (current, next) => handleSlide(next),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className="container mx-auto py-8 xl:px-12">

      <Slider {...settings} >
        {
          imageArr.map((imageCard, index) => (

            <div key={index} className="px-2">

              <div className={`bg-white rounded-2xl shadow-lg transition-all overflow-hidden hover:shadow-lg
                ${ index === activeSlide ? 'border-2 border-blue-500' : ''} `}>
                <img
                  src={`/src/assets/${imageCard}`}
                  alt={`Image index is: ${index}`}
                  className="w-full h-full rounded-xl max-h-24 object-cover"
                />
              </div>
            
            </div>
          ))
        }
      </Slider>

    </div>
  );
};

export default CardCarousel;
