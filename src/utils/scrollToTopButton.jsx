import React, { useEffect } from "react";
import '../style/scrollToTop.css'

const ScrollToTopButton = () => {
    useEffect(() => {
        const scrollButton = document.getElementById('scrollToTop');

        const handleScrol = () => {
            if (window.scrollY > 200) {
                scrollButton.classList.remove('hidden');
                scrollButton.classList.add('visible');
            } else {
                scrollButton.classList.remove('visible');
                scrollButton.classList.add('hidden');
            }
        }

        const handleClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.addEventListener('scroll', handleScrol);
        scrollButton.addEventListener('click', handleClick);
        
        return () => {
            window.removeEventListener('scroll', handleScrol);
            scrollButton.removeEventListener('click', handleClick);
        }
    }, []);

    return (
        <div>
            <button id="scrollToTop" className="hidden">↑</button>
        </div>
    )
}

export default ScrollToTopButton;