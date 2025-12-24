const Skills = () => {
    const skillsData = [
        {
            icon: 'fas fa-laptop-code',
            title: 'Frontend Development',
            description: 'Creating responsive, user-friendly interfaces with modern web technologies',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Component-based']
        },
        {
            icon: 'fas fa-server',
            title: 'Backend Development',
            description: 'Building robust, scalable backend systems with Python and FastAPI',
            tags: ['Python', 'FastAPI', 'REST API', 'Data Validation']
        },
        {
            icon: 'fas fa-brain',
            title: 'AI & Generative AI',
            description: 'Developing intelligent systems powered by cutting-edge AI technologies',
            tags: ['GenAI', 'AI Agents', 'RAG', 'Prompt Engineering', 'LLM Q&A']
        },
        {
            icon: 'fas fa-robot',
            title: 'AI Agent Frameworks & Tools',
            description: 'Orchestrating complex multi-agent workflows and autonomous systems',
            tags: ['CrewAI', 'Multi-agent', 'Task Orchestration', 'Autonomous Agents']
        },
        {
            icon: 'fas fa-magic',
            title: 'Vibe Coding & AI Dev Tools',
            description: 'Leveraging AI-powered development tools for rapid prototyping',
            tags: ['Claude', 'Cursor', 'Antigravity', 'Lovable', 'AI-assisted Dev']
        },
        {
            icon: 'fas fa-cogs',
            title: 'RPA & Automation',
            description: 'Streamlining processes with intelligent automation solutions',
            tags: ['UiPath', 'Selenium', 'Python']
        },
        {
            icon: 'fas fa-chart-line',
            title: 'Machine Learning',
            description: 'Predictive models and deep learning architectures at scale',
            tags: ['TensorFlow', 'PyTorch', 'Scikit-learn']
        },
        {
            icon: 'fas fa-brain',
            title: 'Large Language Models',
            description: 'Fine-tuning and deploying LLMs with RAG and prompt engineering',
            tags: ['GPT-4', 'Claude', 'Llama']
        },
        {
            icon: 'fab fa-react',
            title: 'Full Stack Development',
            description: 'Modern web applications with seamless user experiences',
            tags: ['React', 'Node.js', 'MongoDB']
        },
        {
            icon: 'fas fa-cloud',
            title: 'Cloud & DevOps',
            description: 'Scalable deployments with CI/CD and containerization',
            tags: ['AWS', 'Docker', 'Kubernetes']
        }
    ];

    return (
        <section id="skills">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tag">What I Do</span>
                    <h2 className="section-title">Skills & <span className="gradient-text">Expertise</span></h2>
                    <p className="section-subtitle">Building tomorrow's solutions with today's most advanced technologies</p>
                </div>
                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div className="skill-box" key={index}>
                            <div className="skill-icon"><i className={skill.icon}></i></div>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                            <div className="tech-tags">
                                {skill.tags.map((tag, tagIndex) => (
                                    <span className="tech-tag" key={tagIndex}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
