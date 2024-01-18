const Contact = () => {
    return (
        <section id="contact">
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                <img
                    src={require("../assets/email.png")}
                    alt="Email icon"
                    className="icon contact-icon email-icon"
                />
                <p><a href="mailto:umarm417@gmail.com">umarm417@gmail.com</a></p>
                </div>
                <div className="contact-info-container">
                <img
                    src={require("../assets/email.png")}
                    alt="Email icon"
                    className="icon contact-icon email-icon"
                />
                <p><a href="mailto:umanzoor@gatech.edu">umanzoor@gatech.edu</a></p>
                </div>
                <div className="contact-info-container">
                <img
                    src={require("../assets/linkedin.png")}
                    alt="LinkedIn icon"
                    className="icon contact-icon"
                />
                <p><a href="https://www.linkedin.com/in/umaralimanzoor/">LinkedIn</a></p>
                </div>
                <div className="contact-info-container">
                <img
                    src={require("../assets/github.png")}
                    alt="Github icon"
                    className="icon contact-icon"
                />
                <p><a href="https://github.com/Umar-Manzoor">Github</a></p>
                </div>
            </div>
        </section>
    )
}

export default Contact