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
                                <p>As a Software Integration Engineer Intern at Georgia Pacific, I developed a messaging system using NATS.io's publish-subscribe architecture, improving the communication time between manufacturing plant PLCs and the cloud. I created connectors for the NATS cluster, one linking to a third-party Kepware server using OPC-UA, and another connecting to an AWS S3 bucket. My optimizations reduced PLC-to-cloud communication time by approximately 20%, enhancing overall system efficiency.</p>
                            </div>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="about-containers-title">
                            <p className="section__text__p4">Georgia State University</p>
                            <h1 className="about-title">Teaching Assistant</h1>
                            <div className="text-container">
                                <p>As a Teaching Assistant, I played a pivotal role in facilitating student success. I led engaging teach-in discussions on critical course content, helping students better prepare for their exams. This interactive approach resulted in a remarkable 50% increase in the likelihood of students achieving an 'A' grade in the course compared to those who did not attend these sessions. In addition to these sessions, I also provided valuable support to the professor, assisted in grading assignments and exams, and offered guidance and mentorship to students, ensuring a well-rounded educational experience.</p>
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