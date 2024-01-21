const Skills = () => {
    return (
        <section id="skills">
            <p className="section__text__p1">Here Are My</p>
            <h1 className="title">Skills</h1>
            <div className="experience-details-container">
                <div className="skills-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title">Programming Languages</h2>
                        <div className="article-container">
                            <article>
                                <div>
                                    <h3>Python</h3>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>Java</h3>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>JavaScript</h3>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>GoLang</h3>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>C</h3>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>C++</h3>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>HTML</h3>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>CSS</h3>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title">Technologies</h2>
                        <div className="article-container">
                        <article>
                            <div>
                                <h3>ReactJS</h3>
                            </div>
                        </article>
                        <article>
                            <div>
                                <h3>React-Native</h3>
                            </div>
                        </article>
                        <article>
                            <div>
                                <h3>Node js</h3>
                            </div>
                        </article>
                        <article>
                            <div>
                                <h3>Express js</h3>
                            </div>
                        </article>
                        <article>
                            <div>
                                <h3>Git</h3>
                            </div>
                        </article>
                        <article>
                            <div>
                                <h3>Postman</h3>
                            </div>
                        </article>
                        <article>
                            <div>
                                <h3>AWS S3</h3>
                            </div>
                        </article>
                        <article>
                            <div>
                                <h3>MongoDB</h3>
                            </div>
                        </article>
                        <article>
                            <div>
                                <h3>NATS.io</h3>
                            </div>
                        </article>
                        </div>
                    </div>
                </div>
            </div>
            <img 
                src={require("../assets/arrow.png")}
                alt="Arrow icon" 
                className="icon arrow" 
                onClick={() => window.location.assign('./#projects')} 
            />
        </section>
    )
}

export default Skills