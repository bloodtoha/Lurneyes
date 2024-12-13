import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/footer";
import ScrollToTopButton from "./utils/scrollToTopButton";
import "./style/index.css"

const App = () => {
    return (
        <>
            <ScrollToTopButton />
            <Nav />
            <Main />
            <Footer />
        </>
        
    )
}

export default App