const Projects = () => {
    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="projects-details-container">
                <div className="project-containers">
                    <div className="details-container color-container">
                        <h2 className="experience-sub-title project-title">Techedia</h2>
                        <div className="text-container-projects">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere placeat, alias laborum culpa maxime autem recusandae cupiditate, esse saepe quis, quo libero porro non eius soluta necessitatibus tempora. Incidunt consequuntur eligendi commodi atque assumenda enim cumque, distinctio, dolore fugiat officia ut aperiam iste eaque et, deleniti minus quibusdam. Commodi.</p>
                        </div>
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
                        <h2 className="experience-sub-title project-title">Swiftly</h2>
                        <div className="text-container-projects">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere placeat, alias laborum culpa maxime autem recusandae cupiditate, esse saepe quis, quo libero porro non eius soluta necessitatibus tempora. Incidunt consequuntur eligendi commodi atque assumenda enim cumque, distinctio, dolore fugiat officia ut aperiam iste eaque et, deleniti minus quibusdam. Commodi.</p>
                        </div>
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
                        <h2 className="experience-sub-title project-title">Student Org Event Organizer</h2>
                        <div className="text-container-projects">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere placeat, alias laborum culpa maxime autem recusandae cupiditate, esse saepe quis, quo libero porro non eius soluta necessitatibus tempora. Incidunt consequuntur eligendi commodi atque assumenda enim cumque, distinctio, dolore fugiat officia ut aperiam iste eaque et, deleniti minus quibusdam. Commodi.</p>
                        </div>
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
                        <h2 className="experience-sub-title project-title">Georgia Tech Blog</h2>
                        <div className="text-container-projects">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere placeat, alias laborum culpa maxime autem recusandae cupiditate, esse saepe quis, quo libero porro non eius soluta necessitatibus tempora. Incidunt consequuntur eligendi commodi atque assumenda enim cumque, distinctio, dolore fugiat officia ut aperiam iste eaque et, deleniti minus quibusdam. Commodi.</p>
                        </div>
                        <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.location.assign('https://github.com/Umar-Manzoor/Georgia-Tech-Blog')} 
                        >
                            Github
                        </button>
                        </div>
                    </div> 
                    <div className="details-container color-container">
                        <h2 className="experience-sub-title project-title">Portfolio</h2>
                        <div className="text-container-projects">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere placeat, alias laborum culpa maxime autem recusandae cupiditate, esse saepe quis, quo libero porro non eius soluta necessitatibus tempora. Incidunt consequuntur eligendi commodi atque assumenda enim cumque, distinctio, dolore fugiat officia ut aperiam iste eaque et, deleniti minus quibusdam. Commodi.</p>
                        </div>
                        <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.location.assign('https://github.com/Umar-Manzoor/Georgia-Tech-Blog')} 
                        >
                            Github
                        </button>
                        </div>
                    </div>  
                    <div className="details-container color-container">
                        <h2 className="experience-sub-title project-title">Snake Game</h2>
                        <div className="text-container-projects">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere placeat, alias laborum culpa maxime autem recusandae cupiditate, esse saepe quis, quo libero porro non eius soluta necessitatibus tempora. Incidunt consequuntur eligendi commodi atque assumenda enim cumque, distinctio, dolore fugiat officia ut aperiam iste eaque et, deleniti minus quibusdam. Commodi.</p>
                        </div>
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
