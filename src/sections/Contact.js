const Contact = () => {
    return (
        <section id="contact">
            <p class="section__text__p1">Get in Touch</p>
            <h1 class="title">Contact Me</h1>
            <div class="contact-info-upper-container">
                <div class="contact-info-container">
                <img
                    src={require("../assets/email.png")}
                    alt="Email icon"
                    class="icon contact-icon email-icon"
                />
                <p><a href="mailto:umarm417@gmail.com">umarm417@gmail.com</a></p>
                </div>
                <div class="contact-info-container">
                <img
                    src={require("../assets/email.png")}
                    alt="Email icon"
                    class="icon contact-icon email-icon"
                />
                <p><a href="mailto:umanzoor@gatech.edu">umanzoor@gatech.edu</a></p>
                </div>
                <div class="contact-info-container">
                <img
                    src={require("../assets/linkedin.png")}
                    alt="LinkedIn icon"
                    class="icon contact-icon"
                />
                <p><a href="https://www.linkedin.com/in/umaralimanzoor/">LinkedIn</a></p>
                </div>
                <div class="contact-info-container">
                <img
                    src={require("../assets/github.png")}
                    alt="Github icon"
                    class="icon contact-icon"
                />
                <p><a href="https://github.com/Umar-Manzoor">Github</a></p>
                </div>
            </div>
        </section>
    )
}

export default Contact