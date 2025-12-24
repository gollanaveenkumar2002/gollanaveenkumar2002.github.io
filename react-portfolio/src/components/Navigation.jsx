import { useState, useEffect } from 'react';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={isScrolled ? 'scrolled' : ''}>
            <div className="nav-content">
                <a href="#" className="logo">NAVEEN</a>
                <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" className="active" onClick={closeMobileMenu}>Home</a></li>
                    <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
                    <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
                    <li><a href="#certifications" onClick={closeMobileMenu}>Certifications</a></li>
                    <li><a href="#resume" onClick={closeMobileMenu}>Resume</a></li>
                    <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
                </ul>
                <div className="hamburger" onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
