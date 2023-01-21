import React from "react";

const Footer = () => {
    return(
        <p class="footer--copyright">Copyright &copy; 2023-{(new Date().getFullYear())} All Rights Reserved by
         <a className="footer--link" href="index.html"> Reika Developments</a></p>
    )
}

export default Footer