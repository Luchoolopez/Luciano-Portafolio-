import { useState } from 'react';
import { translations } from '../translations';
import CVModal from './CVModal';
import '../index.css';

const Hero = ({ language }) => {
    const t = translations[language].hero;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div className="container">
                    <span style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1rem', display: 'block' }}>
                        {t.greeting}
                    </span>
                    <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Luciano Nicolas <br />
                        <span className="gradient-text">Lopez Gonzalez</span>
                    </h1>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                        {t.role}
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        {t.description}
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn-primary">
                            {t.cta}
                        </a>
                        <a href="#contact" className="btn-secondary">
                            {t.contact}
                        </a>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-secondary"
                            style={{ border: '1px solid var(--accent-primary)' }}
                        >
                            {t.download_cv}
                        </button>
                    </div>
                </div>
            </section>
            <CVModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Hero;
