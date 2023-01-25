import React from "react";
import './style.css'

import Navbar from './components/Navbar'
import SliderContainer from './components/slider/SliderContainer'
import Info from './components/Info'
import Contacts from './components/Contacts'
import Footer from "./components/Footer"
import FeedbackSlider from "./components/feedback/FeedbackSlider";

 const App = () =>{
        return(
            <>
                <Navbar />
                <SliderContainer />
                <div className="backgroundsvg wavestop"></div>
                <Info />
                <Contacts />
                <div className="backgroundsvg wavesbottom"></div>
                <FeedbackSlider />
                <Footer />
            </>
        )
}


export default App