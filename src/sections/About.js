const About = () => {
    return (
        <section id='about'>
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">

                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img 
                                src={require("../assets/experience.png")} 
                                alt="Experience icon"
                                className="icon"
                            />
                            <h3>Experience</h3>
                            <p>2+ years <br/>Fullstack Development</p>
                        </div>
                        <div className="details-container">
                        <img 
                                src={require("../assets/education.png")} 
                                alt="Education icon"
                                className="icon"
                            />
                            <h3>Education</h3>
                            <p>Graduation: May 2024 <br/>B.S. Computer Science <br/>Georgia Institute of Technology</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere placeat, alias laborum culpa maxime autem recusandae cupiditate, esse saepe quis, quo libero porro non eius soluta necessitatibus tempora. Incidunt consequuntur eligendi commodi atque assumenda enim cumque, distinctio, dolore fugiat officia ut aperiam iste eaque et, deleniti minus quibusdam. Commodi.</p>
                    </div>
                </div>
                <div className="section__pic-container">
                    <img 
                        src={require("../assets/about-pic.png")} 
                        alt="Umar Manzoor about Picture"
                        className="about-pic"
                    />
                </div>
            </div>
            <img 
                src={require("../assets/arrow.png")}
                alt="Arrow icon" 
                className="icon arrow" 
                onClick={() => window.location.assign('./#experience')} 
            />
        </section>
    )
}

export default About