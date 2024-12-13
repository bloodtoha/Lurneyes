import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import '../style/nav.css'

const Nav = () => {
    return (
        <header className="navbar">
            <h2>LURNEYES</h2>
            <div className="Buttons-nav">
                <Button color="white"
                    component='a'
                    href="#about"
                >About</Button>
                <Button color="white"
                    component='a'
                    href="#projects"
                >Projects</Button>
                <Button color="white"
                    component='a'
                    href="#contact"
                >Contact</Button>
            </div>
        </header>
    )
}

export default Nav;