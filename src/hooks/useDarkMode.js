import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Save the selected theme to localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

    // Listener to detect theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function to update state based on system preference
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) { // If not set manually
        setDarkMode(e.matches);
      }
    };

    // Attach the event listener
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
