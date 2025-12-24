const Experience = () => {
    return (
        <section id="experience">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tag">Career Journey</span>
                    <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
                    <p className="section-subtitle">Building innovative solutions with AI and technology</p>
                </div>
                <div className="experience-timeline">
                    <div className="experience-item">
                        <div className="experience-header">
                            <div className="experience-title">
                                <h3>AI Developer Intern</h3>
                                <div className="experience-company">Swecha Telangana</div>
                            </div>
                            <div className="experience-date">
                                <i className="far fa-calendar"></i>
                                2025
                            </div>
                        </div>
                        <p className="experience-description">
                            Contributed to open-source AI projects and developed machine learning models for social impact
                            initiatives. Worked on data preprocessing, model training, and deployment pipelines.
                            Collaborated with a diverse team on AI-driven solutions for educational and governmental
                            applications in Telangana.
                        </p>
                        <div className="experience-skills">
                            <span className="experience-skill">Python</span>
                            <span className="experience-skill">Machine Learning</span>
                            <span className="experience-skill">TensorFlow</span>
                            <span className="experience-skill">Data Analysis</span>
                            <span className="experience-skill">Open Source</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
