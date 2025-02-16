import React from "react";
import "../style/projects.css"
import "../style/index.css"
import { Button } from "@mui/material";
import image1 from "../img/thumbnail1.jpg"
import image2 from "../img/thumbnail2.jpg"

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h1>My best work</h1>
            <div className="container">
                <div className="cart">
                    <div className="image-container">
                        <img src={image1} alt="" />
                    </div>
                    <div className="cart-content">
                        <Button color="white"
                        component="a"
                        href="https://www.youtube.com/watch?v=8NJiZw5USPs"
                        target="_blank"
                       >Check out here</Button>
                    </div>
                </div>
                <div className="cart">
                    <div className="image-container">
                        <img src={image2} alt="" />
                    </div>
                    <div className="cart-content">
                       <Button color="white"
                        component="a"
                        href="https://www.youtube.com/watch?v=qR9lvs7PZGg"
                        target="_blank"
                       >Check out here</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;