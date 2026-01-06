import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [language, setLanguage] = useState('es'); // Default to Spanish

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
}

export default App;
