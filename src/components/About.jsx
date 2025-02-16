import React from "react";
import image from "../img/photo2.png"
import "../style/main.css";
import YouTubeStats from "./youtubeStats";
import SvgIcons from "./SvgIcons";
import { orange } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const About = () => {
        const ColorButton = styled(Button)(({ theme }) => ({
            color: theme.palette.getContrastText(orange[500]),
            backgroundColor: orange[500],
            "&:hover": {
              backgroundColor: orange[700],
            },
          }));
    return (
        <section className="About" id="about">
            <img className="aboutImg" src={image} alt="" />
            <div className="title">
                <h1 className="briefly">I do <span>video editing</span></h1>
                <p>
                    I'm a creative video editor with two years of experience,
                    dedicated to producing visually compelling content that captivates and inspires. 
                    I specialize in crafting unique visual narratives that engage audiences and bring ideas to life.
                </p>
                <ColorButton variant="contained" 
                    component="a"
                    href="https://t.me/lurneyes"
                >Contact me</ColorButton>
                <h1>Statistics</h1>
                <YouTubeStats />
            </div>
            <div className="exp">
                <h1>Experienced with</h1>
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