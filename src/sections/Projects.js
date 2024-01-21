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
                            <p>Created an interactive social media web application exclusively for Georgia Tech students, featuring user authentication and seamless file upload/download capabilities. The project leveraged a modern tech stack, including ReactJS for a dynamic frontend, Node.js for a scalable backend, Express.js for middleware management, and MongoDB for efficient database handling. Security was paramount, and I ensured database protection through mandatory user authentication using JSON Web Tokens. Rigorous unit testing with Postman resulted in an impressive 95% code coverage, allowing for quick identification and resolution of any issues.</p>
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
                            <p>Led a development team in the creation of a cutting-edge mobile application that redefined the in-store shopping experience. The app empowered users to scan products, add them to their cart, and complete purchases seamlessly on their phones, eliminating the need for long checkout lines. The tech stack included React-Native for the frontend, AWS DynamoDB for robust database management, Node.js for the backend, and Stripe for secure transactions. User testing demonstrated Swiftly's remarkable performance, with it being up to 29 times faster during peak shopping times and around 10 times faster during normal hours. Notably, our project secured 2nd place in Georgia Tech's Create-X class, competing against 16 startups.</p>
                        </div>
                        <div className="btn-container">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.location.assign('https://github.com/Umar-Manzoor/Swiftly')} 
                        >
                            Github
                        </button>
                        </div>
                        <div className="btn-container-swiftly">
                        <button
                            className="btn btn-color-2 project-btn"
                            onClick={() => window.location.assign('https://www.linkedin.com/feed/update/urn:li:activity:7140239145741852672/')} 
                        >
                            LinkedIn
                        </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <h2 className="experience-sub-title project-title">Student Org Event Organizer</h2>
                        <div className="text-container-projects">
                            <p>Created an interactive website aimed at simplifying event planning and organization for Georgia Tech students involved in student organizations. The platform offered features like RSVPs and geolocation-based event mapping, enhancing the overall experience. The tech stack included ReactJS for the frontend, MongoDB for efficient database management, Next.js as the backend framework, and Node.js for backend development. Notably, the website contributed to a significant 25% increase in student engagement for nine student organization events, each with attendee counts ranging from 50 to 200 people during the spring semester.</p>
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
                            <p>Designed and developed a specialized blog platform catering to Georgia Tech students, offering a space for them to share and explore content relevant to their university experience. Leveraging React for the frontend and a local JSON server for backend data storage, I employed the useContext API for efficient state management. The platform allows users to create and read posts, fostering a sense of community among Georgia Tech students.</p>
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
                            <p>Developed a dynamic and engaging portfolio website using React for a component-based frontend design. Achieved a significant 40% boost in site rendering speed through meticulous JavaScript/HTML optimizations and the implementation of effective state management techniques. This project showcases my expertise in crafting high-performance web experiences with React.</p>
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
                            <p>I developed a classic Snake game in Java, harnessing the power of JavaFX and Java Swing for graphics. JavaFX's flexibility and rich set of UI controls allowed me to create a visually engaging and responsive game interface, while Java Swing's ease of use and event-driven model enhanced the user experience. The game offers an immersive journey with smooth animations, intuitive controls, and a scoring system. It showcases my Java programming skills and game development expertise, illustrating how these technologies seamlessly combine traditional gameplay with the capabilities of JavaFX and Java Swing.</p>
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
