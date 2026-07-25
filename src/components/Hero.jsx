import { useState } from 'react';
import { translations } from '../translations';
import CVModal from './CVModal';
import '../index.css';

const Hero = ({ language }) => {
    const t = translations[language].hero;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const available = {
        es: 'Disponible para trabajar',
        en: 'Available for work',
        jp: '仕事の依頼受付中'
    }[language];

    return (
        <>
            <section
                id="hero"
                className="section"
                style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
            >
                <div className="container" style={{ maxWidth: '900px' }}>
                    {/* Status chip */}
                    <div
                        className="fade-up"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '8px 16px',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '50px',
                            background: 'var(--surface)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem'
                        }}
                    >
                        <span className="status-dot" />
                        {available}
                    </div>

                    <span
                        className="fade-up"
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1rem',
                            color: 'var(--red)',
                            marginBottom: '1.2rem',
                            display: 'block',
                            animationDelay: '0.05s'
                        }}
                    >
                        {t.greeting}
                    </span>

                    <h1
                        className="fade-up"
                        style={{
                            fontSize: 'clamp(2.6rem, 7vw, 5rem)',
                            fontWeight: '700',
                            marginBottom: '1.5rem',
                            lineHeight: 1.05,
                            animationDelay: '0.1s'
                        }}
                    >
                        Luciano Nicolas <br />
                        <span className="gradient-text">Lopez Gonzalez</span>
                    </h1>

                    <h2
                        className="fade-up"
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'clamp(1.1rem, 3vw, 1.7rem)',
                            fontWeight: 500,
                            marginBottom: '2rem',
                            color: 'var(--text-secondary)',
                            animationDelay: '0.15s'
                        }}
                    >
                        <span style={{ color: 'var(--red)' }}>&lt;/&gt;</span> {t.role}
                    </h2>

                    <p
                        className="fade-up"
                        style={{
                            maxWidth: '600px',
                            margin: '0 auto 3rem',
                            fontSize: '1.1rem',
                            lineHeight: 1.7,
                            color: 'var(--text-secondary)',
                            animationDelay: '0.2s'
                        }}
                    >
                        {t.description}
                    </p>

                    <div
                        className="fade-up"
                        style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', animationDelay: '0.25s' }}
                    >
                        <a href="#projects" className="btn-primary">
                            {t.cta}
                        </a>
                        <a href="#contact" className="btn-secondary">
                            {t.contact}
                        </a>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-secondary"
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
