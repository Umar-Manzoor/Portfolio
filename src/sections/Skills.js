const Skills = () => {
    return (
        <section id="skills">
            <p className="section__text__p1">Here Are My</p>
            <h1 className="title">Skills</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                <div className="details-container">
                    <h2 className="experience-sub-title">Frontend Development</h2>
                    <div className="article-container">
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
                        <article>
                            <div>
                                <h3>JavaScript</h3>
                            </div>
                        </article>
                        <article>
                            <div>
                                <h3>React JS</h3>
                            </div>
                        </article>
                        <article>
                            <div>
                                <h3>ReactNative</h3>
                            </div>
                        </article>
                        </div>
                    </div>
                        <div className="details-container">
                            <h2 className="experience-sub-title">Backend Development</h2>
                            <div className="article-container">
                            <article>
                                <div>
                                    <h3>MongoDb</h3>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>Node JS</h3>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>Express JS</h3>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>Git</h3>
                                </div>
                            </article>
                            <article>
                                <div>
                                    <h3>NATS</h3>
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