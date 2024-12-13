import React from "react";
import exampleImage from '../img/photo2.png'
import '../style/main.css';
import YouTubeStats from "./youtubeStats";
import SvgIcons from "./SvgIcons";
import { orange } from "@mui/material/colors";
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";

const About = () => {
        const ColorButton = styled(Button)(({ theme }) => ({
            color: theme.palette.getContrastText(orange[500]),
            backgroundColor: orange[500],
            '&:hover': {
              backgroundColor: orange[700],
            },
          }));
    return (
        <section className="About" id="about">
            <img className="aboutImg" src={exampleImage} alt="" />
            <div className="title">
                <h1 className="briefly">I'm doing <span>video editing</span></h1>
                <p>I am a video editor with two years of experience,
                passionate about creating dynamic and creative video projects.
                My specialty is the installation and development of unique visual solutions that attract the attention
                and inspire the audience.</p>
                <ColorButton variant="contained" 
                    component='a'
                    href="https://t.me/lurneyes"
                >Telegram</ColorButton>
                <h1>Statistics</h1>
                <YouTubeStats />
            </div>
            <div className="exp">
                <h1>EXPERIENCE WITH</h1>
                <div className="svgIcon">
                    <SvgIcons name="icon1" alt="icon 1" />
                    <SvgIcons name="icon2(silver)" alt="icon 2" />
                    <SvgIcons name="icon3" alt="icon 3" />
                </div>
            </div>
        </section>
    )
}

export default About;