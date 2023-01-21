import React from "react";
import sliderImages from "./SilderImages";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = () => {
    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    const slider = React.useRef(null);
    return(
        <>
          <button className="slidercontainer--previous" onClick={() => slider?.current?.slickPrev()}><i class="fa-solid fa-arrow-left"></i></button>
          <button className="slidercontainer--next" onClick={() => slider?.current?.slickNext()}><i class="fa-solid fa-arrow-right"></i></button>
          <Slider className="slidercontainer" ref={slider} {...settings}>
            <div className="slidercontainer--slide">
              <div className="slidercontainer--text">
                <h2>{sliderImages[0].title}</h2>
                <p>{sliderImages[0].info}</p>
              </div >
              <img className="slidercontainer--image" src={sliderImages[0].image} alt="Canaria1"></img>
            </div>
            <div className="slidercontainer--slide">
              <div className="slidercontainer--text">
                <h2>{sliderImages[1].title}</h2>
                <p>{sliderImages[1].info}</p>
              </div >
              <img className="slidercontainer--image" src={sliderImages[1].image} alt="Canaria2"></img>
            </div>
            <div className="slidercontainer--slide">
              <div className="slidercontainer--text">
                <h2>{sliderImages[2].title}</h2>
                <p>{sliderImages[2].info}</p>
              </div >
              <img className="slidercontainer--image" src={sliderImages[2].image} alt="Canaria3"></img>
            </div>
          </Slider>
        </>
    )
}

export default SliderContainer