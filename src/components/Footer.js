import React from "react";

const Footer = () => {
    return(
        <p className="footer--copyright">Copyright &copy; 2023-{(new Date().getFullYear())} All Rights Reserved by
         <a className="footer--link" href="https://lukasreika.com/" target="_blank" rel="noreferrer"> Reika Developments</a></p>
    )
}

export default Footer