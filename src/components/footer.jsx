import React from "react";
import '../style/footer.css'
import tgIcon from '../img/svg/telegram2.svg'

const Footer = () => {
    return (
        <footer id="contact">
            <div className="footerContent">
                <h2>Contact</h2>
                <p>I am a video editor with two years of experience, passionate about creating dynamic and atmospheric anime edits.
                My specialty is editing and processing videos with unique visual effects, syncing to music and creating a powerful emotional atmosphere. 
                I strive to improve my skills and create works that catch the viewer and inspire admiration.</p>
                <div className="contact">
                    <img src={tgIcon} alt=""/>
                    <span>@lurnsss</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer;