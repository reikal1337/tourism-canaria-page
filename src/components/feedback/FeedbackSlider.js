import React from "react";
import feedbacks from "./feedbackObject";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FeedbackSlider = () =>{
    var settings = {
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,

      };
    return(
        <Slider className="feedbackslider--container" {...settings}>
            <div className="feedbackslider--slide">
                <h5 className="feedbackslider--name">{feedbacks[0].name}</h5>
                <p className="feedbackslider--feedback"><p className="feedbackslider--customquote">“</p>&nbsp;&nbsp;{feedbacks[0].feedback}<p className="feedbackslider--customquote end">”</p></p>
                <ul>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </ul>
            </div>
            <div className="feedbackslider--slide">
                <h5 className="feedbackslider--name">{feedbacks[1].name}</h5>
                <p className="feedbackslider--feedback"><p className="feedbackslider--customquote">“</p>&nbsp;&nbsp;{feedbacks[1].feedback}<p className="feedbackslider--customquote end">”</p></p>
                <ul>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </ul>
            </div>
            <div className="feedbackslider--slide">
                <h5 className="feedbackslider--name">{feedbacks[2].name}</h5>
                <p className="feedbackslider--feedback"><p className="feedbackslider--customquote">“</p>&nbsp;&nbsp;{feedbacks[2].feedback}<p className="feedbackslider--customquote end">”</p></p>
                <ul>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </ul>
            </div>
            <div className="feedbackslider--slide">
                <h5 className="feedbackslider--name">{feedbacks[3].name}</h5>
                <p className="feedbackslider--feedback"><p className="feedbackslider--customquote">“</p>&nbsp;&nbsp;{feedbacks[3].feedback}<p className="feedbackslider--customquote end">”</p></p>
                <ul>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </ul>
            </div>
            <div className="feedbackslider--slide">
                <h5 className="feedbackslider--name">{feedbacks[4].name}</h5>
                <p className="feedbackslider--feedback"><p className="feedbackslider--customquote">“</p>&nbsp;&nbsp;{feedbacks[4].feedback}<p className="feedbackslider--customquote end">”</p></p>
                <ul>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </ul>
            </div>
            <div className="feedbackslider--slide">
                <h5 className="feedbackslider--name">{feedbacks[5].name}</h5>
                <p className="feedbackslider--feedback"><p className="feedbackslider--customquote">“</p>&nbsp;&nbsp;{feedbacks[5].feedback}<p className="feedbackslider--customquote end">”</p></p>
                <ul>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </ul>
            </div>
        </Slider>
    )
}

export default FeedbackSlider