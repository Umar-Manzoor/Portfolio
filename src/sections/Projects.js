const Projects = () => {
    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="projects-details-container">
                <div className="project-containers">
                <div className="details-container color-container">
                    <div className="article-container">
                    <img
                        src={require("../assets/project-1.png")}                        
                        alt="Project 1"
                        className="project-img"
                    />
                    </div>
                    <h2 className="experience-sub-title project-title">Techedia</h2>
                    <div className="btn-container">
                    <button
                        className="btn btn-color-2 project-btn"
                        onClick={() => window.location.assign('https://github.com/Umar-Manzoor/Georgia-Tech-Social-Media-App---Techedia')} 
                    >
                        Github
                    </button>
                    </div>
                </div>
                <div className="details-container color-container">
                    <div className="article-container">
                    <img
                        src={require("../assets/project-2.png")}                        
                        alt="Project 2"
                        className="project-img"
                    />
                    </div>
                    <h2 className="experience-sub-title project-title">Swiftly</h2>
                    <div className="btn-container">
                    <button
                        className="btn btn-color-2 project-btn"
                        onClick={() => window.location.assign('https://github.com/Umar-Manzoor/Swiftly')} 
                    >
                        Github
                    </button>
                    </div>
                </div>
                <div className="details-container color-container">
                    <div className="article-container">
                    <img
                        src={require("../assets/project-3.png")}                        
                        alt="Project 3"
                        className="project-img"
                    />
                    </div>
                    <h2 className="experience-sub-title project-title">Student Org Event Organizer</h2>
                    <div className="btn-container">
                    <button
                        className="btn btn-color-2 project-btn"
                        onClick={() => window.location.assign('https://github.com/Umar-Manzoor/Student-Organization-Event-Planner')} 
                    >
                        Github
                    </button>
                    </div>
                </div>
                <div className="details-container color-container">
                    <div className="article-container">
                    <img
                        src={require("../assets/project-3.png")}                        
                        alt="Project 3"
                        className="project-img"
                    />
                    </div>
                    <h2 className="experience-sub-title project-title">Georgia Tech Blog</h2>
                    <div className="btn-container">
                    <button
                        className="btn btn-color-2 project-btn"
                        onClick={() => window.location.assign('https://github.com/Umar-Manzoor/Georgia-Tech-Blog')} 
                    >
                        Github
                    </button>
                    </div>
                </div> 
                </div>


            

            </div>

                



            <img 
                src={require("../assets/arrow.png")}
                alt="Arrow icon" 
                className="icon arrow" 
                onClick={() => window.location.assign('./#about')} 
            />
        </section>
    )
}

export default Projects
