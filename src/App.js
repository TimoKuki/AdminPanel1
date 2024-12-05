import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Footer from './components/Footer';
import useDarkMode from './hooks/useDarkMode'; // Import the useDarkMode hook

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode(); // Get dark mode state

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Router>
        <Header />
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle Dark Mode ({darkMode ? 'ON' : 'OFF'})
        </button>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
