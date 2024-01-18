import { useState } from "react";

const Nav2 = () => {
    const [activeLinks, setActiveLinks] = useState(true);
    const [activeIcons, setActiveIcons] = useState(true);

    const toggleMenu = () => {
        if (activeLinks === true) {
            setActiveLinks(false);
        } else if (activeLinks === false) {
            setActiveLinks(true);
        }
        if (activeIcons === true) {
            setActiveIcons(false);
        } else if (activeIcons === false) {
            setActiveIcons(true);
        }
    }

    return (
        <nav id="lined-nav">
            <div className="logo" onClick={() => window.location.assign('https://www.linkedin.com/in/umaralimanzoor/')}>Umar Manzoor</div>
            <div className="lined-menu">
                <div className={activeIcons ? "lined-icon" : "lined-icon open"} onClick={() => toggleMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={activeLinks ? "menu-links" : "menu-links open"}>
                    <li><a href="#about" onClick={() => toggleMenu()}>About</a></li>
                    <li><a href="#experience" onClick={() => toggleMenu()}>Experience</a></li>
                    <li><a href="#projects" onClick={() => toggleMenu()}>Projects</a></li>
                    <li><a href="#contact" onClick={() => toggleMenu()}>Contact</a></li>
                </div>
            </div>
        </nav>
    )
}

export default Nav2