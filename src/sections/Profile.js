const Profile = () => {


    return (
        <section id='profile'>
            <div className="section__pic-container">
                <img src={require("../assets/profile-picture2.png")} alt="Umar Manzoor profile Pic"/>
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello I'm</p>
                <h1 className="title">Umar Manzoor</h1>
                <p className="section__text__p2">Fullstack Developer</p>
                <div className="btn-container">
                    <button className="btn btn-color-2" onClick={() => window.location.assign('https://drive.google.com/file/d/1FGJle30UUZBwYyYBHMzdMxoi74wzrBcA/view?usp=sharing')}>
                        Download Resume
                    </button>
                    <button className="btn btn-color-1" onClick={() => window.location.assign('./#contact')}>
                        Contact Info
                    </button>
                </div>
                <div id="socials-container">
                    <img 
                        src={require("../assets/linkedin.png")} 
                        alt="Umar Manzoor Linkedin Profile" 
                        className="icon" 
                        onClick={() => window.location.assign('https://www.linkedin.com/in/umaralimanzoor/')}
                    />
                    <img 
                        src={require("../assets/github.png")} 
                        alt="Umar Manzoor Github Profile" 
                        className="icon" 
                        onClick={() => window.location.assign('https://github.com/Umar-Manzoor')}
                    />
                </div>
            </div>
        </section>
    )
}

export default Profile
