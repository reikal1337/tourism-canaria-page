import React from "react"
import logo from '../images/logo.png'

 const Navbar = () =>{
    return(
        <nav className="navbar--list">
            <img className="navbar--image" src={logo} alt='Logo'></img>
            <a href="">Home</a>
            <a href="">Info</a>
            <a href="">Contacts</a>
        </nav>
    )
}
export default Navbar