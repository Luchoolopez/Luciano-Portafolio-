import React from 'react';
import cvEng from '../cv/LucianoLopezGonzalezCV-ENG.pdf';
import cvEsp from '../cv/LucianoLopezGonzalezCV-ESP.pdf';
import cvJap from '../cv/LucianoLopezGonzalezCV-JAP.pdf';
import '../index.css';

const CVModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleDownload = (file, fileName) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        onClose();
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(5px)'
        }} onClick={onClose}>
            <div
                className="card"
                style={{
                    maxWidth: '400px',
                    width: '90%',
                    padding: '2rem',
                    textAlign: 'center',
                    position: 'relative',
                    animation: 'slide-down 0.3s ease-out'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '15px',
                        fontSize: '1.5rem',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer'
                    }}
                >
                    &times;
                </button>

                <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '2rem',
                    color: 'var(--text-primary)'
                }}>
                    Select Language / Seleccionar Idioma
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <button
                        className="btn-secondary"
                        onClick={() => handleDownload(cvEsp, 'Luciano_Lopez_CV_ESP.pdf')}
                        style={{ width: '100%', border: '1px solid var(--accent-primary)' }}
                    >
                        🇪🇸 Español
                    </button>
                    <button
                        className="btn-secondary"
                        onClick={() => handleDownload(cvEng, 'Luciano_Lopez_CV_ENG.pdf')}
                        style={{ width: '100%', border: '1px solid var(--accent-secondary)' }}
                    >
                        🇺🇸 English
                    </button>
                    <button
                        className="btn-secondary"
                        onClick={() => handleDownload(cvJap, 'Luciano_Lopez_CV_JAP.pdf')}
                        style={{ width: '100%' }}
                    >
                        🇯🇵 日本語
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CVModal;
