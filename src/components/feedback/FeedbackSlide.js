import React from "react";

const FeedbackSlide = ({ id ,name, feedback}) =>{

    return(
        <div className="feedbackslider--slide">
                <h5 className="feedbackslider--name">{name}</h5>
                <h6 className="feedbackslider--feedback" ><p className="feedbackslider--customquote">“</p>&nbsp;&nbsp;{feedback}<p className="feedbackslider--customquote end">”</p></h6>
                <ul>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </ul>
            </div>
    )
}

export default FeedbackSlide