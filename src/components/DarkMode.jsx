import { useEffect, useState } from 'react';

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Check if there's a theme saved in localStorage or if the user prefers dark mode
    return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const root = document.documentElement;

    // Add or remove the 'dark' class on html based on the isDark state
    if (isDark) {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]); // The effect runs when the `isDark` state changes

  return (
    <button
      className="ml-auto px-3 py-1 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded text-sm hover:opacity-80 transition"
      onClick={() => setIsDark(prev => !prev)} // Toggle dark mode
    >
      {isDark ? '☀ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
