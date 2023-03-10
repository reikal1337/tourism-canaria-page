import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import feedbackObjects from "./feedbackObjects";
import FeedbackSlide from "./FeedbackSlide"


const FeedbackSlider = () =>{
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1540,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
                breakpoint: 1210,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                }
        ]
        
        
      };
      const slides = feedbackObjects.map( feedbackData => {
        return <FeedbackSlide
            key={feedbackData.id}
            name={feedbackData.name}
            feedback={feedbackData.feedback}
        />
      })
    return(
        <Slider className="feedbackslider--container" {...settings}>
            {slides}
        </Slider>
    )
}

export default FeedbackSlider