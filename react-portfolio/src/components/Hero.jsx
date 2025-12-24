const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-text">
                    <h1>Hi, I'm <span className="gradient-text">Golla Naveen Kumar</span></h1>
                    <p className="subtitle">AI/ML Engineer & Full Stack Developer</p>
                    <p>
                        Crafting intelligent solutions with cutting-edge AI, automation, and modern web technologies.
                        Specializing in LLMs, AI Agents, RPA, and scalable full-stack applications.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            <i className="fas fa-rocket"></i> View Work
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            <i className="fas fa-envelope"></i> Contact Me
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-container">
                        <div className="image-bg"></div>
                        <div className="profile-pic">
                            <img src="/profile.png" alt="Naveen Kumar" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
