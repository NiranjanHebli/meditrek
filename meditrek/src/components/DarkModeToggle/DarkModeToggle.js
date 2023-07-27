import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  function handleToggle() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="dark-mode-toggle">
      <label htmlFor="dark-mode-checkbox">Dark mode</label>
      <input
        type="checkbox"
        id="dark-mode-checkbox"
        checked={isDarkMode}
        onChange={handleToggle}
      />
    </div>
  );
}

export default DarkModeToggle;
