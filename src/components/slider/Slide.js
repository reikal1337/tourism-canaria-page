import React from "react";

const Slide = ({title, info, image, alt}) =>{

    
    return(
        <div className="slidercontainer--slide">
              <div className="slidercontainer--text">
                <h2>{title}</h2>
                <p>{info}</p>
              </div >
              <img className="slidercontainer--image" src={image} alt={alt}></img>
            </div>
    )
}

export default Slide