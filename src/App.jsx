import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AptitudeTest from './components/AptitudeTest';
import Forum from './components/Forum';
import CareerNews from './components/CareerNews';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [homeKey, setHomeKey] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleReset = () => {
    setHomeKey(prev => prev + 1);
    setSelectedCareer(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Header
        onReset={handleReset}
        theme={theme}
        toggleTheme={toggleTheme}
        onSelectCareer={setSelectedCareer}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              key={homeKey}
              onSelectCareer={setSelectedCareer}
              selectedCareer={selectedCareer}
              setSelectedCareer={setSelectedCareer}
            />
          }
        />
        <Route path="/aptitude-test" element={<AptitudeTest />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/news" element={<CareerNews />} />
      </Routes>
    </div>
  );
}

export default App;
