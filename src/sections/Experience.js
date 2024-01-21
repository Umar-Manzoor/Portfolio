const Experience = () => {
    return (
        <section id="experience">
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Experience</h1>
            <div className="projects-details-container">
                <div className="project-containers">
                    <div className="details-container color-container">
                        <div className="about-containers-title">
                            <p className="section__text__p4">Georgia-Pacific</p>
                            <h1 className="experience-title">Software Integration Engineer Intern</h1>
                            <div className="text-container">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere placeat, alias laborum culpa maxime autem recusandae cupiditate, esse saepe quis, quo libero porro non eius soluta necessitatibus tempora. Incidunt consequuntur eligendi commodi atque assumenda enim cumque, distinctio, dolore fugiat officia ut aperiam iste eaque et, deleniti minus quibusdam. Commodi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="about-containers-title">
                            <p className="section__text__p4">Georgia State University</p>
                            <h1 className="about-title">Teaching Assistant</h1>
                            <div className="text-container">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere placeat, alias laborum culpa maxime autem recusandae cupiditate, esse saepe quis, quo libero porro non eius soluta necessitatibus tempora. Incidunt consequuntur eligendi commodi atque assumenda enim cumque, distinctio, dolore fugiat officia ut aperiam iste eaque et, deleniti minus quibusdam. Commodi.</p>
                            </div>
                        </div>
                    </div>
                </div>


            

            </div>
            <img 
                src={require("../assets/arrow.png")}
                alt="Arrow icon" 
                className="icon arrow" 
                onClick={() => window.location.assign('./#skills')} 
            />
        </section>
    )
}

export default Experience