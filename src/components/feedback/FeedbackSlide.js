import React from "react";

const FeedbackSlide = ({name, feedback}) =>{

    return(
        <div className="feedbackslider--slide">
                <h5 className="feedbackslider--name">{name}</h5>
                <p className="feedbackslider--feedback"><p className="feedbackslider--customquote">“</p>&nbsp;&nbsp;{feedback}<p className="feedbackslider--customquote end">”</p></p>
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