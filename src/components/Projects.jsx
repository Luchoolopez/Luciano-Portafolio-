import { useRef } from 'react';
import { translations } from '../translations';
import '../index.css';
import { videoLinks } from '../video/video-muestra';

const Projects = ({ language }) => {
    const t = translations[language].projects;
    const items = t.items;
    const scrollRef = useRef(null);

    const projectsData = [
        { key: 'fade_it', repoLink: 'https://github.com/Luchoolopez/BarberShop', webLink: 'https://barber-shop-k6p0igral-lucianos-projects-72ca708a.vercel.app/', tags: ['TypeScript', 'Express', 'React', 'MySql', 'Docker'] },
        { key: 'concept_hab', repoLink: 'https://github.com/Luchoolopez/Proyecto_final_integrador', webLink: 'https://proyecto-final-integrador.vercel.app/', tags: ['TypeScript', 'Express', 'React', 'MySql', 'Jest', 'Docker'] },
        { key: 'calc_asistencias', repoLink: 'https://github.com/Luchoolopez/Calculadora-de-asistencias', webLink: 'https://luchoolopez.github.io/Calculadora-de-asistencias/', tags: ['Tools', 'Academic', 'JS'] },
        { key: 'snake', repoLink: 'https://github.com/Luchoolopez/Snake_Game_CPP', tags: ['C++', 'Raylib', 'Game Dev'] },
        { key: 'bahia_finder', repoLink: 'https://github.com/Luchoolopez/BahiaFinder', tags: ['MERN', 'React', 'Node.js', 'MongoDB'] },
        { key: 'flappy', repoLink: 'https://github.com/Luchoolopez/FlappyBird_ReactNative', tags: ['React Native', 'Mobile', 'Game Dev'] },
        { key: 'motolog', repoLink: 'https://github.com/Luchoolopez/MotoLog', tags: ['TypeScript', 'Express', 'React', 'MySQL'] },
        { key: 'smartstock', repoLink: 'https://github.com/RaphaelNicaise/Metodologia-de-Sistemas-2', tags: ['TypeScript', 'Express', 'React', 'MySQL'] },
        { key: 'utopia_gym', repoLink: 'https://github.com/Luchoolopez/software-gimnasio.git', tags: ['JavaScript', 'Node.js', 'React', 'MySQL'] }
    ];

    const getEmbedUrl = (url) => {
        if (!url) return null;
        const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/))([^&?]+)/);
        const videoId = videoIdMatch ? videoIdMatch[1] : null;
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    };

    const projects = projectsData.map(p => ({
        ...p,
        title: items[p.key].title,
        description: items[p.key].desc,
        video: getEmbedUrl(videoLinks[p.key])
    }));


    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 380;
            const maxScrollLeft = current.scrollWidth - current.clientWidth;

            if (direction === 'left') {
                if (current.scrollLeft <= 0) {
                    // Loop to end
                    current.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
                } else {
                    current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }
            } else {
                if (current.scrollLeft >= maxScrollLeft - 10) { // Tolerance
                    current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }
    };

    const arrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 20,
        background: 'rgba(0, 0, 0, 0.6)',
        border: '1px solid var(--glass-border)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        cursor: 'pointer',
        backdropFilter: 'blur(5px)',
        transition: 'all 0.3s ease'
    };

    return (
        <section id="projects" className="section" style={{ overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: '100%', padding: '0', position: 'relative' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>{t.title}</h2>

                <div className="scroller-wrapper" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Left Button */}
                    <button
                        onClick={() => scroll('left')}
                        style={{ ...arrowStyle, left: '20px' }}
                        className="arrow-btn"
                        aria-label="Previous project"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div className="scroller-container-manual" style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <div
                            ref={scrollRef}
                            className="scroller-inner-manual"
                            style={{
                                display: 'flex',
                                gap: '30px',
                                padding: '20px 80px', /* Increased padding for buttons */
                                overflowX: 'auto',
                                scrollBehavior: 'smooth',
                                scrollbarWidth: 'none'
                            }}
                        >
                            {projects.map((project, index) => (
                                <div
                                    key={project.key}
                                    className="card project-card"
                                    style={{
                                        minWidth: '350px',
                                        width: '350px',
                                        flexShrink: 0,
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <div style={{
                                        height: '180px',
                                        background: `linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))`,
                                        borderRadius: '8px',
                                        marginBottom: '1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        padding: project.video ? '0' : undefined
                                    }}>
                                        {project.video ? (
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={project.video}
                                                title={project.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        ) : (
                                            <span style={{ fontSize: '3rem' }}>🚀</span>
                                        )}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                                        {project.description}
                                    </p>
                                    <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} style={{ fontSize: '0.75rem', color: 'var(--accent-primary)' }}>#{tag}</span>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                                        {project.repoLink && (
                                            <a
                                                href={project.repoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-primary"
                                                style={{ flex: 1, textAlign: 'center', fontSize: '0.9rem', padding: '0.5rem' }}
                                            >
                                                {t.view_project}
                                            </a>
                                        )}
                                        {project.webLink && (
                                            <a
                                                href={project.webLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-secondary"
                                                style={{ flex: 1, textAlign: 'center', fontSize: '0.9rem', padding: '0.5rem' }}
                                            >
                                                {t.view_web}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        style={{ ...arrowStyle, right: '20px' }}
                        className="arrow-btn"
                        aria-label="Next project"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;

