const Certifications = () => {
    const certificationsData = [
        {
            icon: 'fas fa-robot',
            title: 'Automation Starter',
            issuer: 'UiPath Academy',
            date: '2025',
            description: 'Gained hands-on knowledge of RPA concepts and built simple automation workflows using UiPath.'
        },
        {
            icon: 'fas fa-brain',
            title: 'Advanced AI Building Bootcamp',
            issuer: 'IIIT Hyderabad (via Swecha)',
            date: 'June 2024',
            description: 'Participated in an intensive hands-on program focused on advanced AI concepts and real-world applications. Worked on projects involving machine learning, deep learning, and AI model deployment.'
        },
        {
            icon: 'fas fa-shield-alt',
            title: 'Introduction to Cybersecurity',
            issuer: 'Cisco Networking Academy',
            date: 'July 2022',
            description: 'Developed understanding of cybersecurity concepts, network protection, and cyber threat management.'
        },
        {
            icon: 'fas fa-server',
            title: 'Operating System (OS) Basics',
            issuer: 'Cisco Networking Academy',
            date: 'June 2023',
            description: 'Gained foundational understanding of operating systems, including processes, memory management, file systems, and system security.'
        },
        {
            icon: 'fab fa-java',
            title: 'Java Tools (Basic) Certificate',
            issuer: 'Future Skills Prime by AICTE',
            date: 'February 2023',
            description: 'Gained foundational knowledge of Java development tools and their applications in software development.'
        }
    ];

    return (
        <section id="certifications">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tag">Achievements</span>
                    <h2 className="section-title">Certifications & <span className="gradient-text">Training</span></h2>
                    <p className="section-subtitle">Continuous learning and professional development</p>
                </div>
                <div className="certifications-grid">
                    {certificationsData.map((cert, index) => (
                        <div className="cert-card" key={index}>
                            <div className="cert-icon">
                                <i className={cert.icon}></i>
                            </div>
                            <h3>{cert.title}</h3>
                            <div className="cert-issuer">{cert.issuer}</div>
                            <span className="cert-date">
                                <i className="far fa-calendar"></i> {cert.date}
                            </span>
                            <p className="cert-description">{cert.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
