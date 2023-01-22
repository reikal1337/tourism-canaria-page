import React from "react";

const Contacts = () =>{
    return(
        <ul className="contacts--container">
            <h1 className="contacts--title" id="contacts">Contacts</h1>
            <a className="contacts--whatsapp" href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i> +3706259846</a>
            <a className="contacts--email" href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-envelope"></i> tavoemail@example.com</a>
            <a className="contacts--messenger" href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-messenger"></i> Contacts us with Messenger!</a>
            <a className="contacts--phone" href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-phone"></i> +3706259846</a>
        </ul>
    )
}

export default Contacts