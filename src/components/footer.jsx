import React from "react";
import "../style/footer.css"
import tgIcon from "../img/svg/telegram2.svg"

const Footer = () => {
    return (
        <footer id="contact">
            <div className="footerContent">
                <h2>How to contact me</h2>
                <div className="contact">
                    <img src={tgIcon} alt=""/>
                    <span>@lurnsss</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;