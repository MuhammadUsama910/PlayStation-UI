import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

import { accessoriesArr, imageArr } from '../constants/constants';

// { selectActiveImage }
const CardCarousel = ({ NumberProp, Dots, onSlideChange }) => {

  const [activeSlide, setActiveSlide] = useState(0);

  const handleBeforeChange = (current, next) => {

    setActiveSlide(next);

    if(NumberProp === 1)
    {
      onSlideChange(`/src/assets/${imageArr[next]}`);
    }
    else if(NumberProp === 2)
    {
      onSlideChange(`/src/assets/Accessories/${accessoriesArr[next]}`);
    }
  }

  const settings = {
    
    dots: Dots,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: handleBeforeChange,
    // className: "center",
    // centerMode: true,
    // centerPadding: "60px",

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
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className="container mx-auto py-8 xl:px-12">

      <Slider {...settings} >
        { NumberProp === 1 &&
          imageArr?.map((imageCard, index) => (

            <div key={index} className="px-2">

              <div className={`bg-white rounded-2xl shadow-lg transition-all overflow-hidden hover:shadow-lg
                ${ index === activeSlide ? 'border-2 border-blue-500' : ''} `}>
                <img
                  src={`/src/assets/${imageCard}`}
                  alt={`Image index is: ${index}`}
                  className="w-full h-full rounded-xl max-h-28 object-cover"
                />
              </div>
            
            </div>
          ))
        }

        { NumberProp === 2 &&
          accessoriesArr?.map((imageCard, index) => (

            <div key={index} className="px-2">

              <div className={`bg-white rounded-2xl shadow-lg transition-all overflow-hidden hover:shadow-lg
                ${ index === activeSlide ? 'border-2 border-blue-500' : ''} `}>
                <img
                  src={`/src/assets/Accessories/${imageCard}`}
                  alt={`Image index is: ${index}`}
                  className="w-full h-full rounded-xl max-h-28 object-cover"
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


// What is handleBeforeChange?
// Answer:
// handleBeforeChange is a callback function provided by the react-slick library. 
// This function is called before a slide transition begins, and it receives two parameters: current and next.

// Parameters
// current: The index of the currently active slide before the transition.
// next: The index of the slide that will become active after the transition.
// These parameters are provided by the react-slick library, which handles the logic of the carousel.
