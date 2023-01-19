import React from "react"
import logo from '../images/logo.png'

 const Navbar = () =>{
    return(
        <nav className="navbar--container">
            <img className="navbar--image" src={logo} alt='Logo'></img>
            <ul className="nav--list">
                <a href="">Home</a>
                <a href="">Info</a>
                <a href="">Contacts</a>
            </ul>
        </nav>
    )
}
export default Navbar