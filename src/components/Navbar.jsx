import { useState, useEffect } from 'react';
import { translations } from '../translations';
import '../index.css';

const Navbar = ({ language, setLanguage }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const t = translations[language].nav;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const languages = [
        { code: 'es', label: 'ESP' },
        { code: 'en', label: 'ENG' },
        { code: 'jp', label: 'JPN' }
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            padding: '20px 0',
            zIndex: 1000,
            background: scrolled || menuOpen ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
            backdropFilter: scrolled || menuOpen ? 'blur(10px)' : 'none',
            borderBottom: scrolled || menuOpen ? '1px solid rgba(255,255,255,0.1)' : 'none',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: '700', margin: 0, zIndex: 1002, letterSpacing: '-0.02em' }}>
                    Luciano<span style={{ color: 'var(--red)' }}>.</span>
                </h2>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0 }}>
                        <li><a href="#hero" className="nav-link">{t.home}</a></li>
                        <li><a href="#about" className="nav-link">{t.about}</a></li>
                        <li><a href="#projects" className="nav-link">{t.projects}</a></li>
                        <li><a href="#contact" className="nav-link">{t.contact}</a></li>
                    </ul>

                    <div style={{ display: 'flex', gap: '10px' }}>
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setLanguage(lang.code)}
                                style={{
                                    background: language === lang.code ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    color: 'white',
                                    fontSize: '0.8rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    fontWeight: language === lang.code ? 'bold' : 'normal'
                                }}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="mobile-menu open">
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, textAlign: 'center' }}>
                        <li><a href="#hero" onClick={toggleMenu} style={{ fontSize: '1.2rem', fontWeight: 500, display: 'block', padding: '10px' }}>{t.home}</a></li>
                        <li><a href="#about" onClick={toggleMenu} style={{ fontSize: '1.2rem', fontWeight: 500, display: 'block', padding: '10px' }}>{t.about}</a></li>
                        <li><a href="#projects" onClick={toggleMenu} style={{ fontSize: '1.2rem', fontWeight: 500, display: 'block', padding: '10px' }}>{t.projects}</a></li>
                        <li><a href="#contact" onClick={toggleMenu} style={{ fontSize: '1.2rem', fontWeight: 500, display: 'block', padding: '10px' }}>{t.contact}</a></li>
                    </ul>

                    <div className="lang-selector" style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    toggleMenu();
                                }}
                                style={{
                                    background: language === lang.code ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    color: 'white',
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    fontWeight: language === lang.code ? 'bold' : 'normal'
                                }}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
