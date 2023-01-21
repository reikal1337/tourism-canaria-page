import React from "react";
import './style.css'

import Navbar from './components/Navbar'
import SliderContainer from './components/SliderContainer'
import Info from './components/Info'
import Contacts from './components/Contacts'

 const App = () =>{
        return(
            <>
                <Navbar />
                <SliderContainer />
                <Info />
                <Contacts />
            </>
        )
}


export default App