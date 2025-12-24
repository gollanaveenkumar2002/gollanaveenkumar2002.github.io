import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
                    <p className="section-subtitle">Ready to bring your ideas to life? Let's collaborate</p>
                </div>
                <div className="contact-grid">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Your Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            <i className="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                    <div className="contact-info">
                        <h3>Let's Build Something Amazing</h3>
                        <p>
                            Whether you need AI expertise, automation solutions, or full-stack development, I'm here to help
                            turn your vision into reality.
                        </p>
                        <div className="contact-items">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>nyadav77181@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <span>+91 7093494563</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>India</span>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/golla-naveen-kumar-846b5227b/" className="social-link" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/gollanaveenkumar2002" className="social-link" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="social-link">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="mailto:nyadav77181@gmail.com" className="social-link">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
