import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

import logo from '../images/logo.png'

const Whatsapp = () =>{
    return(
        <WhatsAppWidget
			phoneNo="31627912856"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={false}
			autoOpenTimer={0}
			messageBox={true}
			messageBoxTxt=""
			iconSize="40"
			iconColor="white"
			iconBgColor="#25D366"
			headerIcon={logo}
			headerIconColor="#128C7E"
			headerTxtColor="black"
			headerBgColor="#128C7E"
			headerTitle="Donatas"
			headerCaption="Online"
			bodyBgColor="#bbb"
			chatPersonName="Donatas"
			chatMessage={<>Hi there 👋 <br /><br /> What would be your destination and date ?</>}
			footerBgColor="#999"
			btnBgColor="#25D366"
			btnTxtColor="black"
			btnTxt="Start Chat"
		/>
    )
}

export default Whatsapp