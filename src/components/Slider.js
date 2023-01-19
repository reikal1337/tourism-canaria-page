import React from "react";
import sliderImages from "./SilderImages";
import {useState} from 'react'


const Slider = () => {
    function nextSlide(){
        if(currentSlideIndex < sliderImages.length-1){
            setCurrentSlideIndex(currentSlideIndex+1)
        }else{
            setCurrentSlideIndex(0)
        }
        
    }
    function previosSlide(){
        if(currentSlideIndex != 0){
            setCurrentSlideIndex(currentSlideIndex-1)
        }else{
            setCurrentSlideIndex(sliderImages.length-1)
        }
        
        
    }
    const [currentSlideIndex,setCurrentSlideIndex] = useState(0)
    console.log(currentSlideIndex)
    return(
        <>
            <img className="slider--image" src={sliderImages[currentSlideIndex]}></img>
            <button className="slider-letfarrow" onClick={previosSlide}>Left</button>
            <button className="slider-rightarrow"onClick={nextSlide}>Right</button>
        </>
    )
}

export default Slider