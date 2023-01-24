import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import feedbackObjects from "./feedbackObjects";
import FeedbackSlide from "./FeedbackSlide"


const FeedbackSlider = () =>{
    var settings = {
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
        
        
      };
    return(
        <Slider className="feedbackslider--container" {...settings}>
            <FeedbackSlide 
                name={feedbackObjects[0].name}
                feedback={feedbackObjects[0].feedback}
            />
            <FeedbackSlide 
                name={feedbackObjects[1].name}
                feedback={feedbackObjects[1].feedback}
            />
            <FeedbackSlide 
                name={feedbackObjects[2].name}
                feedback={feedbackObjects[2].feedback}
            />
            <FeedbackSlide 
                name={feedbackObjects[3].name}
                feedback={feedbackObjects[3].feedback}
            />
            <FeedbackSlide 
                name={feedbackObjects[4].name}
                feedback={feedbackObjects[4].feedback}
            />
            <FeedbackSlide 
                name={feedbackObjects[0].name}
                feedback={feedbackObjects[0].feedback}
            />
        </Slider>
    )
}

export default FeedbackSlider