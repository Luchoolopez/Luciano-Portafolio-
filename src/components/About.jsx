import { translations } from '../translations';
import '../index.css';

const About = ({ language }) => {
    const t = translations[language].about;
    const skills = ['ExpressJS', 'NodeJS', 'MySql', 'MongoDB', 'JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'C++', 'C#', 'Python', 'Flask', 'Django', 'Git', 'GitHub', 'Docker'];

    return (
        <section id="about" className="section" style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}>
            <div className="container">
                <span className="section-label">01 // {t.title}</span>
                <h2 className="section-heading">{t.title}</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>

                    <div className="card">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>{t.education}</h3>
                        <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{t.school_secondary}</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{t.location_secondary}</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{t.year_secondary}</p>
                        <p>{t.desc_secondary}</p>
                    </div>

                    <div className="card">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>{t.university}</h3>
                        <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{t.school_uni}</p>
                        <p style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem', opacity: 0.9 }}>{t.degree_uni}</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{t.location_uni}</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{t.year_uni}</p>
                        <p>{t.desc_uni}</p>
                    </div>

                    <div className="card">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>{t.eng_title}</h3>
                        <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{t.eng_school}</p>
                        <p style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem', opacity: 0.9 }}>{t.eng_degree}</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{t.eng_location}</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span className="status-dot" />{t.eng_year}
                        </p>
                        <p>{t.eng_desc}</p>
                    </div>

                    <div className="card">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>{t.languages}</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>➤</span> {t.lang_es}
                            </li>
                            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>➤</span> {t.lang_en}
                            </li>
                            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--accent-secondary)' }}>➤</span> {t.lang_jp}
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="scroller-container" style={{ marginTop: '4rem' }}>
                    <div className="scroller-inner">
                        {skills.concat(skills).concat(skills).map((skill, index) => (
                            <div key={`${skill}-${index}`} className="skill-tag">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
