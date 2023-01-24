import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "./Slide";
import slideObjcts from "./slideObjects"

const SliderContainer = () => {
    var settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    const slider = React.useRef(null);

    const slides = slideObjcts.map(slideData => {
      return <Slide
        title={slideData.title}
        info={slideData.info}
        image={slideData.image}
        alt={slideData.alt}
      />
    }) 

    return(
        <>
          <button className="slidercontainer--previous" onClick={() => slider?.current?.slickPrev()} alt="Arrow left"><i className="fa-solid fa-arrow-left"></i></button>
          <button className="slidercontainer--next" onClick={() => slider?.current?.slickNext()} alt="Arrow right"><i className="fa-solid fa-arrow-right"></i></button>
          <Slider className="slidercontainer" ref={slider} {...settings}>
            {slides}
          </Slider>
        </>
    )
}

export default SliderContainer
