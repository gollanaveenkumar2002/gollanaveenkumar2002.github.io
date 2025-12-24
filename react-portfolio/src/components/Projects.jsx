const Projects = () => {
    const projectsData = [
        {
            title: 'FastAPI Calculator API',
            category: 'Backend Development',
            description: 'A backend REST API built using FastAPI to perform arithmetic operations with clean API design and validation.',
            tags: ['Python', 'FastAPI'],
            github: 'https://github.com/gollanaveenkumar2002/fastAPI---calculator'
        },
        {
            title: 'APK Data Extractor & Analyzer',
            category: 'Cybersecurity + Backend',
            description: 'A cybersecurity-focused tool that extracts APK metadata, source code elements, permissions, IPs, URLs, domains, and threat indicators.',
            tags: ['Python', 'FastAPI', 'Static Analysis'],
            github: 'https://github.com/gollanaveenkumar2002/apkdataextractor'
        },
        {
            title: 'Wikipedia Q&A AI Agent',
            category: 'Generative AI',
            description: 'An AI-powered question-answering agent that retrieves relevant information from Wikipedia using RAG and LLM reasoning.',
            tags: ['Python', 'LLMs', 'RAG', 'AI Agents'],
            github: 'https://github.com/gollanaveenkumar2002/wikipedia-QA-agent'
        },
        {
            title: 'Cogninode Technologies Website',
            category: 'Frontend Development',
            description: 'A professional company portfolio website showcasing services, branding, and digital presence.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/gollanaveenkumar2002/cogninodetech'
        },
        {
            title: 'AI Assistant – Gramasakshi',
            category: 'Generative AI',
            description: 'Developed an AI-Powered assistant for rural users to answer queries about medical, farming, education, and more. Supports voice and text interactions in regional languages with real-time data via APIs.',
            tags: ['Python', 'Groq APIs', 'NLP', 'Streamlit', 'TTS/STT'],
            details: [
                'Designed the conversational engine and integrated multiple APIs',
                'Implemented multilingual voice/text support and optimized domain-specific responses'
            ]
        },
        {
            title: 'UiPath RPA Bot for Web Scraping & Excel Reporting',
            category: 'Automation',
            description: 'Created an RPA bot to automatically extract structured data from websites and store it in Excel, eliminating manual entry.',
            tags: ['UiPath Studio'],
            details: [
                'Configured data scraping, selectors, and key activities for accurate capture and storage'
            ]
        },
        {
            title: 'Python Automated PDF Fetch & WhatsApp Sharing Bot',
            category: 'Automation',
            description: 'Automation to fetch PDFs from websites and instantly share them via WhatsApp, speeding up delivery and removing repetitive manual work.',
            tags: ['Python', 'Selenium', 'WhatsApp'],
            details: [
                'Integrated WhatsApp Web automation for sharing with designated contacts/groups'
            ]
        },
        {
            title: 'Customer Churn Prediction',
            category: 'Machine Learning',
            description: 'Predicted customer churn for a telecom company using supervised ML to enable better retention strategies.',
            tags: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'],
            details: [
                'Preprocessed and analyzed data; handled imbalance with SMOTE',
                'Trained models achieving 85%+ accuracy with GridSearchCV optimization'
            ]
        },
        {
            title: 'Malicious URL Detection using Deep Reinforcement Learning',
            category: 'Cybersecurity',
            description: 'Designed a DRL-powered cybersecurity system to detect phishing/malware URLs using DQN and ALBERT embeddings.',
            tags: ['Python', 'DRL', 'TensorFlow', 'ALBERT', 'Gym'],
            details: [
                'Built custom Gym environment for real-time DRL agent training',
                'Created web app for live predictions with Google Safe Browsing API integration',
                'Benchmarked against traditional ML models (Random Forest, SVM)'
            ]
        }
    ];

    return (
        <section id="projects">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tag">Portfolio</span>
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="section-subtitle">Showcasing advanced AI, automation, and machine learning work</p>
                </div>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <div className="project-tags">
                                    <span className="project-tag">{project.category}</span>
                                </div>
                                <p>{project.description}</p>
                                {project.details && (
                                    <ul style={{ marginLeft: '1.2em', marginTop: '0.5em' }}>
                                        {project.details.map((detail, detailIndex) => (
                                            <li key={detailIndex}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                                <div className="tech-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span className="tech-tag" key={tagIndex}>{tag}</span>
                                    ))}
                                </div>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <i className="fab fa-github"></i> View on GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
