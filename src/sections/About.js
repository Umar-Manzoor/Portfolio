const About = () => {
    return (
        <section id='about'>
            <div className="about-section-divider">
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
                            <p>I'm a Computer Science student set to graduate in May 2024 with a Bachelors degree in Computer Science from Georgia Tech. Beyond my academic pursuits, I'm deeply involved in extracurricular activities that reflect my commitment to personal growth and community involvement. I've held leadership roles in various student organizations at Georgia Tech. Additionally, I've contributed heavily to the Muslim population in Georgia by helping plan the largest Islamic conference in the southeast. In the realm of software development, I'm skilled at building fullstack projects with modern enterprise level technologies. Serving as a Resident Assistant in a freshman dorm, I've fostered a sense of community among new students. As I near graduation, I'm excited to leverage my experiences for a fulfilling career in software engineering.</p>
                        </div>
                    </div>
                    <div className="section__pic-container">
                        <img 
                            src={require("../assets/about-pic.png")} 
                            alt="Umar Manzoor about pic"
                            className="about-pic-intro"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="section-container">
                    <div className="section__pic-container-msa">
                        <img 
                            src={require("../assets/msa1.jpg")} 
                            alt="Umar Manzoor about pic"
                            className="about-pic"
                        />
                    </div>
                    <div className="about-details-container">
                        <div className="about-containers-title">
                            <p className="section__text__p3">Muslim Student Association</p>
                            <h1 className="about-title">Vice President</h1>
                        </div>
                        <div className="text-container">
                            <p>I held a pivotal role in steering the organization's activities and nurturing a thriving community. Leading a dedicated committee of 10 members, I orchestrated a diverse range of events, including weekly religious lectures, monthly gatherings with 50+ attendees, and large-scale semesterly events with 200+ participants. Beyond event planning, I played a crucial role in shaping the organization's vision and strategy, collaborating closely with the President and other board members to ensure the association's goals were met. Additionally, I organized and facilitated dinners during the sacred month of Ramadan, offering essential support to Muslim students. </p>
                        </div>
                        <div>
                            <img 
                                src={require("../assets/msa-instagram.png")} 
                                alt="MSA instagram" 
                                className="icon-msa" 
                                onClick={() => window.location.assign('https://www.instagram.com/gatechmsa/?hl=en')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="section-container">
                    <div className="about-details-container">
                        <div className="about-containers-title">
                            <p className="section__text__p3">Miftaah Institute</p>
                            <h1 className="about-title">Conference Organizer</h1>
                        </div>
                        <div className="text-container-miftaah">
                            <p>As a member of the conference organizing team at Miftaah Institute, I played a crucial role in planning the largest Islamic conference in the Southeastern United States. My responsibilities included event marketing, logistical coordination, and leading a team of 60 volunteers on the conference day. We successfully organized an event that brought together 1,800+ attendees and featured seven world-renowned religious scholars as speakers. I continue to serve in this role for the upcoming 2024 conference, where I'm committed to ensuring its success.</p>
                        </div>
                        <div>
                        <img 
                                src={require("../assets/youtube-logo.png")} 
                                alt="Miftaah youtube video" 
                                className="icon-miftaah" 
                                onClick={() => window.location.assign('https://www.youtube.com/watch?v=3OkYWzQMYNk')}
                            />
                        </div>
                    </div>
                    <div className="section__pic-container-msa">
                        <img 
                            src={require("../assets/miftaah1.jpeg")} 
                            alt="Umar Manzoor about pic"
                            className="about-pic"
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="section-container">
                    <div className="section__pic-container-msa">
                        <img 
                            src={require("../assets/psa.jpg")} 
                            alt="Umar Manzoor about pic"
                            className="about-pic"
                        />
                    </div>
                    <div className="about-details-container">
                        <div className="about-containers-title">
                            <p className="section__text__p3">Pakistani Student Association</p>
                            <h1 className="about-title">Treasurer</h1>
                        </div>
                        <div className="text-container">
                            <p>I took on the responsibility of managing the organization's finances, overseeing a substantial annual budget of $20,000. My duties included budgeting, applying for grants, and fundraising to support the association's initiatives. Notably, I successfully secured funding from the Consulate General of Pakistan in Dallas, Texas, further strengthening the financial foundation of the organization. In addition to financial management, I fulfilled all the essential duties expected of a treasurer within a student organization, contributing to the overall success of the Pakistani Student Association.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="section-container">
                    <div className="about-details-container">
                        <div className="about-containers-title">
                            <p className="section__text__p3">Georgia Institute of Technology</p>
                            <h1 className="about-title">Resident Assistant</h1>
                        </div>
                        <div className="text-container-miftaah">
                            <p>As a Resident Assistant (RA) in a freshman dorm at Georgia Tech, I hold a multifaceted position that plays a crucial role in shaping the residential experience for our new students. My responsibilities encompass diverse areas, including offering academic guidance, organizing community-building events, ensuring safety and security, providing mentorship, managing administrative tasks, assisting during emergencies, designing engaging programs, and mediating conflicts. My dedication to creating a welcoming and supportive environment for incoming freshmen contributes significantly to their personal growth and academic success. I take pride in fostering a sense of belonging and community within the dorm, enabling our residents to thrive during their crucial first year at Georgia Tech.</p>
                        </div>
                    </div>
                    <div className="section__pic-container-msa">
                        <img 
                            src={require("../assets/tech-tower.jpeg")} 
                            alt="Umar Manzoor about pic"
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
            </div>
        </section>
    )
}

export default About
