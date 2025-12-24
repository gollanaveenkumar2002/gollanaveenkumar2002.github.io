const Resume = () => {
    const handleDownload = () => {
        window.print();
    };

    return (
        <section id="resume" className="resume-section">
            <div className="section-container">
                <button onClick={handleDownload} className="btn btn-primary download-resume-btn">
                    <i className="fas fa-download"></i> Download Resume (PDF)
                </button>

                <div className="resume-container resume-hidden" id="resume-content">
                    {/* Header */}
                    <div className="resume-header">
                        <h1>GOLLA NAVEEN KUMAR</h1>
                        <div className="resume-subtitle-role">AI/ML ENGINEER | FULL STACK DEVELOPER</div>
                        <div className="resume-contact">
                            <span>Email: nyadav77181@gmail.com</span>
                            <span>Phone: +91-7093494563</span>
                            <span>Location: India</span>
                        </div>
                        <div className="resume-links">
                            <span>LinkedIn: linkedin.com/in/golla-naveen-kumar-846b5227b</span>
                            <span>GitHub: github.com/gollanaveenkumar2002</span>
                        </div>
                    </div>

                    {/* Professional Summary */}
                    <div className="resume-section">
                        <h2 className="resume-section-title">PROFESSIONAL SUMMARY</h2>
                        <p className="resume-text">
                            Results-driven AI/ML Engineer specializing in Generative AI, Large Language Models (LLMs), Deep Reinforcement Learning, and Full-Stack Development. Proven ability to design and deploy production-ready AI systems achieving 85–94% accuracy, automate workflows reducing manual effort by 90–95%, and build cybersecurity intelligence solutions using advanced machine learning techniques.

                            Currently working as an AI & Cybersecurity Research Intern at Cogninode Technologies, contributing to research, development, and implementation of AI-driven security systems, automation pipelines, and intelligent detection frameworks.

                            Technically proficient in Python, TensorFlow, PyTorch, React, and FastAPI, with hands-on experience in RAG systems, AI agents, RPA automation, cloud-ready deployments, and scalable backend architectures. Completed the Advanced AI Building Bootcamp at IIIT Hyderabad, with a strong focus on real-world problem solving, applied research, and industry-grade AI solutions.
                        </p>
                    </div>

                    {/* Technical Skills */}
                    <div className="resume-section">
                        <h2 className="resume-section-title">TECHNICAL SKILLS</h2>
                        <div className="resume-skills-grid">
                            <div className="resume-skill-category">
                                <strong>Programming Languages:</strong> Python, JavaScript (ES6+), HTML5, CSS3, Java, SQL
                            </div>
                            <div className="resume-skill-category">
                                <strong>Machine Learning & AI:</strong> TensorFlow, PyTorch, Scikit-learn, Keras, Deep Learning, Neural Networks,
                                Convolutional Neural Networks (CNN), Recurrent Neural Networks (RNN), Natural Language Processing (NLP),
                                Computer Vision, Reinforcement Learning, Deep Q-Networks (DQN), Model Training, Model Deployment,
                                Hyperparameter Tuning, GridSearchCV, Cross-Validation, Feature Engineering, Data Augmentation
                            </div>
                            <div className="resume-skill-category">
                                <strong>Generative AI & LLMs:</strong> GPT-4, GPT-3.5, Claude, Llama, Gemini, ChatGPT, OpenAI API,
                                Retrieval-Augmented Generation (RAG), Vector Databases, Embeddings, BERT, ALBERT, Transformer Models,
                                Prompt Engineering, Few-Shot Learning, Zero-Shot Learning, Fine-tuning, AI Agents, LangChain,
                                CrewAI, Multi-Agent Systems, Groq API, Hugging Face Transformers
                            </div>
                            <div className="resume-skill-category">
                                <strong>Web Development:</strong> React.js, Node.js, Express.js, FastAPI, Flask, Django, REST API,
                                RESTful Services, GraphQL, MongoDB, MySQL, PostgreSQL, Responsive Web Design, Single Page Applications (SPA),
                                Component-Based Architecture, State Management, Redux, Hooks, JWT Authentication, OAuth
                            </div>
                            <div className="resume-skill-category">
                                <strong>Data Science & Analytics:</strong> Pandas, NumPy, Matplotlib, Seaborn, Plotly, Data Visualization,
                                Data Preprocessing, Data Cleaning, Exploratory Data Analysis (EDA), Statistical Analysis, A/B Testing,
                                SMOTE, Imbalanced Data Handling, Time Series Analysis
                            </div>
                            <div className="resume-skill-category">
                                <strong>Automation & RPA:</strong> UiPath Studio, UiPath Orchestrator, Selenium WebDriver, BeautifulSoup,
                                Scrapy, Web Scraping, Browser Automation, Process Automation, Workflow Automation, Task Scheduling,
                                WhatsApp Automation, PDF Processing
                            </div>
                            <div className="resume-skill-category">
                                <strong>Cloud & DevOps:</strong> Amazon Web Services (AWS), AWS EC2, AWS S3, AWS Lambda, Docker,
                                Docker Compose, Kubernetes, CI/CD Pipelines, GitHub Actions, Git, Version Control,
                                Containerization, Microservices Architecture
                            </div>
                            <div className="resume-skill-category">
                                <strong>Cybersecurity:</strong> Threat Detection, Malware Analysis, Phishing Detection, Static Code Analysis,
                                Dynamic Analysis, APK Analysis, URL Classification, Security Assessment, Penetration Testing Concepts,
                                Google Safe Browsing API, Network Security, Vulnerability Assessment
                            </div>
                            <div className="resume-skill-category">
                                <strong>Development Tools:</strong> VS Code, PyCharm, Jupyter Notebook, Google Colab, Claude AI,
                                Cursor IDE, GitHub Copilot, Streamlit, Gradio, Postman, Swagger, Docker Desktop
                            </div>
                            <div className="resume-skill-category">
                                <strong>Methodologies:</strong> Agile Development, Scrum, Test-Driven Development (TDD),
                                Object-Oriented Programming (OOP), RESTful Design Principles, Microservices Architecture,
                                Model-View-Controller (MVC), CI/CD Best Practices
                            </div>
                        </div>
                    </div>

                    {/* Professional Experience */}
                    <div className="resume-section">
                        <h2 className="resume-section-title">PROFESSIONAL EXPERIENCE</h2>

                        <div className="resume-job">
                            <div className="resume-job-header">
                                <div>
                                    <h3>AI Developer Intern</h3>
                                    <div className="resume-company">Swecha Telangana | Hyderabad, India</div>
                                </div>
                                <div className="resume-date">2025 - Present</div>
                            </div>
                            <ul className="resume-list">
                                <li>Developed and deployed machine learning models for social impact initiatives serving 10,000+ users across Telangana region</li>
                                <li>Designed and implemented end-to-end data preprocessing pipelines using Python and Pandas, improving data quality by 40%</li>
                                <li>Collaborated with cross-functional teams of 15+ developers on AI-driven solutions for educational and governmental applications</li>
                                <li>Built production-ready ML model deployment pipelines using Docker and FastAPI, reducing deployment time by 60%</li>
                                <li>Conducted code reviews for open-source AI projects with 500+ commits, ensuring code quality and best practices</li>
                                <li>Utilized TensorFlow and PyTorch for model training, achieving 92% accuracy on classification tasks</li>
                                <li>Performed statistical analysis and data visualization using Matplotlib and Seaborn for stakeholder presentations</li>
                            </ul>
                        </div>
                    </div>

                    {/* Key Projects */}
                    <div className="resume-section">
                        <h2 className="resume-section-title">KEY PROJECTS</h2>

                        <div className="resume-project">
                            <h3>Malicious URL Detection System using Deep Reinforcement Learning</h3>
                            <div className="resume-tech">Python | TensorFlow | Deep Q-Network (DQN) | ALBERT | OpenAI Gym | Google Safe Browsing API</div>
                            <ul className="resume-list">
                                <li>Architected and deployed cybersecurity solution using Deep Reinforcement Learning achieving 94% accuracy in detecting phishing and malware URLs</li>
                                <li>Engineered custom OpenAI Gym environment processing 10,000+ URLs for real-time DRL agent training and optimization</li>
                                <li>Implemented ALBERT transformer model for URL feature extraction, improving detection precision by 23% over baseline</li>
                                <li>Developed RESTful web application with FastAPI backend integrating Google Safe Browsing API for live threat predictions</li>
                                <li>Benchmarked DRL model against Random Forest and SVM achieving 15% higher F1-score and 20% reduction in false positives</li>
                                <li>Created comprehensive evaluation framework with confusion matrices, ROC curves, and threat classification reports</li>
                            </ul>
                        </div>

                        <div className="resume-project">
                            <h3>Gramasakshi – Multilingual AI Assistant for Rural Communities</h3>
                            <div className="resume-tech">Python | Groq API | Natural Language Processing | Streamlit | Text-to-Speech | Speech-to-Text</div>
                            <ul className="resume-list">
                                <li>Developed AI-powered conversational assistant supporting 5+ regional languages, serving 5,000+ rural users daily</li>
                                <li>Integrated Groq LLM API with custom prompt engineering for domain-specific responses in medical, agriculture, and education</li>
                                <li>Implemented voice-based interaction using Google TTS/STT APIs, increasing accessibility for 80% of target users</li>
                                <li>Designed and deployed multilingual NLP pipeline with 91% intent classification accuracy across languages</li>
                                <li>Built real-time APIs integration for fetching agricultural commodity prices, weather forecasts, and medical information</li>
                                <li>Created interactive Streamlit web interface with responsive design achieving 4.5/5 user satisfaction rating</li>
                            </ul>
                        </div>

                        <div className="resume-project">
                            <h3>Customer Churn Prediction Model for Telecom Industry</h3>
                            <div className="resume-tech">Python | Scikit-learn | XGBoost | Pandas | SMOTE | GridSearchCV | Data Analytics</div>
                            <ul className="resume-list">
                                <li>Built predictive churn model using XGBoost achieving 87% accuracy on 50,000+ customer records</li>
                                <li>Performed comprehensive EDA identifying 12 key churn indicators and engineered 20+ new features</li>
                                <li>Addressed class imbalance using SMOTE technique, improving minority class recall from 45% to 82%</li>
                                <li>Optimized model hyperparameters using GridSearchCV across 500+ combinations, increasing ROC-AUC to 0.91</li>
                                <li>Generated actionable insights enabling client to reduce churn by 18% through targeted retention campaigns</li>
                                <li>Developed automated reporting dashboard with Plotly visualizations for stakeholder decision-making</li>
                            </ul>
                        </div>

                        <div className="resume-project">
                            <h3>Wikipedia Q&A AI Agent with Retrieval-Augmented Generation</h3>
                            <div className="resume-tech">Python | LangChain | OpenAI GPT-4 | RAG | Vector Embeddings | FAISS | AI Agents</div>
                            <ul className="resume-list">
                                <li>Engineered intelligent question-answering agent using RAG architecture achieving 93% answer relevance score</li>
                                <li>Implemented vector database with FAISS storing 1M+ Wikipedia article embeddings for efficient retrieval</li>
                                <li>Optimized prompt engineering strategies reducing hallucination rate by 67% and improving factual accuracy</li>
                                <li>Built semantic search pipeline with sentence transformers achieving top-5 retrieval accuracy of 89%</li>
                                <li>Deployed multi-turn conversational agent maintaining context across 10+ dialogue exchanges</li>
                            </ul>
                        </div>

                        <div className="resume-project">
                            <h3>APK Security Analysis Tool with Static Code Analysis</h3>
                            <div className="resume-tech">Python | FastAPI | Android Security | Static Analysis | Regex | REST API</div>
                            <ul className="resume-list">
                                <li>Developed comprehensive APK analysis tool extracting 50+ security indicators including permissions, IPs, URLs, and API keys</li>
                                <li>Implemented static code analysis engine processing 200+ APK files daily with 99.5% extraction accuracy</li>
                                <li>Created RESTful API using FastAPI with Swagger documentation for seamless security pipeline integration</li>
                                <li>Engineered regex-based pattern matching identifying malicious code snippets with 85% detection rate</li>
                                <li>Built automated threat scoring system categorizing APKs into risk levels (Low/Medium/High/Critical)</li>
                            </ul>
                        </div>

                        <div className="resume-project">
                            <h3>RPA Web Scraping & Excel Automation Bot</h3>
                            <div className="resume-tech">UiPath Studio | RPA | Excel Automation | Web Scraping | Data Extraction</div>
                            <ul className="resume-list">
                                <li>Automated data extraction workflow processing 1,000+ web pages daily, eliminating 40 hours/week of manual work</li>
                                <li>Configured robust UI selectors and dynamic activities achieving 99% extraction accuracy across different websites</li>
                                <li>Implemented error handling and retry mechanisms reducing bot failure rate by 85%</li>
                                <li>Optimized Excel reporting automation generating formatted reports 10x faster than manual processing</li>
                                <li>Increased operational efficiency by 90% with ROI of 300% within first 3 months of deployment</li>
                            </ul>
                        </div>

                        <div className="resume-project">
                            <h3>Automated PDF Distribution Bot with WhatsApp Integration</h3>
                            <div className="resume-tech">Python | Selenium WebDriver | WhatsApp Web API | Task Automation | Scheduling</div>
                            <ul className="resume-list">
                                <li>Developed end-to-end automation fetching PDFs from 10+ websites and distributing to 50+ WhatsApp contacts/groups</li>
                                <li>Implemented Selenium-based browser automation with headless Chrome for 24/7 scheduled execution</li>
                                <li>Integrated WhatsApp Web automation reducing document sharing time from 2 hours to 5 minutes (95% reduction)</li>
                                <li>Built intelligent retry logic and error notifications ensuring 99.9% delivery success rate</li>
                            </ul>
                        </div>

                        <div className="resume-project">
                            <h3>FastAPI Calculator REST API Service</h3>
                            <div className="resume-tech">Python | FastAPI | REST API | Pydantic | API Design | Documentation</div>
                            <ul className="resume-list">
                                <li>Architected RESTful API service supporting 10+ arithmetic operations with comprehensive input validation</li>
                                <li>Implemented request/response models using Pydantic ensuring type safety and data integrity</li>
                                <li>Created interactive API documentation with Swagger UI and ReDoc for developer adoption</li>
                                <li>Deployed containerized application using Docker with auto-reload for development efficiency</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="resume-section">
                        <h2 className="resume-section-title">EDUCATION</h2>
                        <div className="resume-education">
                            <div className="resume-job-header">
                                <div>
                                    <h3>Bachelor of Technology in Computer Science and Engineering</h3>
                                    <div className="resume-company">Degree | India</div>
                                </div>
                            </div>
                            <ul className="resume-list">
                                <li>Relevant Coursework: Data Structures & Algorithms, Machine Learning, Artificial Intelligence, Database Management Systems, Object-Oriented Programming, Operating Systems, Computer Networks, Software Engineering</li>
                            </ul>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="resume-section">
                        <h2 className="resume-section-title">CERTIFICATIONS</h2>
                        <ul className="resume-list">
                            <li><strong>Advanced AI Building Bootcamp</strong> – IIIT Hyderabad (via Swecha) | June 2024
                                <br />Intensive program covering Machine Learning, Deep Learning, Neural Networks, AI model deployment, and real-world applications</li>
                            <li><strong>Automation Starter Certification</strong> – UiPath Academy | 2025
                                <br />Robotic Process Automation fundamentals, workflow design, and UiPath Studio development</li>
                            <li><strong>Introduction to Cybersecurity</strong> – Cisco Networking Academy | July 2022
                                <br />Network security principles, threat management, and cybersecurity best practices</li>
                            <li><strong>Operating System Basics</strong> – Cisco Networking Academy | June 2023
                                <br />OS fundamentals, process management, memory management, and system security</li>
                            <li><strong>Java Tools Certification</strong> – Future Skills Prime (AICTE) | February 2023
                                <br />Java development tools, IDEs, and enterprise application development</li>
                        </ul>
                    </div>

                    {/* Additional Information */}
                    <div className="resume-section">
                        <h2 className="resume-section-title">ADDITIONAL INFORMATION</h2>
                        <ul className="resume-list">
                            <li><strong>Open Source Contributions:</strong> Active contributor to AI and ML open-source projects on GitHub with 500+ contributions</li>
                            <li><strong>Technical Writing:</strong> Documented complex AI systems and created technical guides for developer communities</li>
                            <li><strong>Languages:</strong> English (Fluent), Telugu (Native), Hindi (Conversational)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media print {
                    .section-header,
                    .download-resume-btn,
                    nav,
                    footer,
                    .hero,
                    #skills,
                    #projects,
                    #experience,
                    #certifications,
                    #contact {
                        display: none !important;
                    }
                    
                    .resume-container {
                        margin: 0 !important;
                        padding: 20px !important;
                        box-shadow: none !important;
                        border: none !important;
                        background: white !important;
                        max-width: 100% !important;
                    }
                    
                    .resume-section {
                        page-break-inside: avoid;
                    }
                    
                    body {
                        background: white !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Resume;
