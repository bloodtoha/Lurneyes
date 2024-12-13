import React from "react";
import '../style/projects.css'
import '../style/index.css'
import { Button } from "@mui/material";


const Projects = () => {
    const videoId = ['R0UrSxwAuLA', '8NJiZw5USPs', 'qR9lvs7PZGg']
    // const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

    

    return (
        <section className="projects" id="projects">
            <h1>PROJECTS</h1>
            <div className="container">
                <div className="cart">
                    <div className="image-container">
                        <img src={`https://img.youtube.com/vi/8NJiZw5USPs/hqdefault.jpg`} alt="" />
                    </div>
                    <div className="cart-content">
                        <Button color="white"
                        component='a'
                        href="https://www.youtube.com/watch?v=8NJiZw5USPs"
                       >CLICK HERE TO VISIT</Button>
                    </div>
                </div>
                <div className="cart">
                    <div className="image-container">
                        <img src={`https://img.youtube.com/vi/qR9lvs7PZGg/hqdefault.jpg`} alt="" />
                    </div>
                    <div className="cart-content">
                       <Button color="white"
                        component='a'
                        href="https://www.youtube.com/watch?v=qR9lvs7PZGg"
                       >CLICK HERE TO VISIT</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;