import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Global styling if any
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <main>
        <Dashboard />
      </main>
      </main>
      <Footer />
    </div>
  );
}

export default App;
