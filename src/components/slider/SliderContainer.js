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
    return(
        <>
          <button className="slidercontainer--previous" onClick={() => slider?.current?.slickPrev()} alt="Arrow left"><i className="fa-solid fa-arrow-left"></i></button>
          <button className="slidercontainer--next" onClick={() => slider?.current?.slickNext()} alt="Arrow right"><i className="fa-solid fa-arrow-right"></i></button>
          <Slider className="slidercontainer" ref={slider} {...settings}>
            <Slide 
              title={slideObjcts[0].title}
              info={slideObjcts[0].info}
              image={slideObjcts[0].image}
              alt={slideObjcts[0].alt}
            />
            <Slide 
              title={slideObjcts[1].title}
              info={slideObjcts[1].info}
              image={slideObjcts[1].image}
              alt={slideObjcts[1].alt}
            />
            <Slide 
              title={slideObjcts[2].title}
              info={slideObjcts[2].info}
              image={slideObjcts[2].image}
              alt={slideObjcts[2].alt}
            />
          </Slider>
        </>
    )
}

export default SliderContainer
