const Nav = () => {

    
    return (
        <nav id="desktop-nav">
            <div className="logo" onClick={() => window.location.assign('https://www.linkedin.com/in/umaralimanzoor/')}>Umar Manzoor</div>
            <div>
                <ul className="nav-links">
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav