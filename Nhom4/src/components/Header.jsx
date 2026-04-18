import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = ({ noteCount }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="header-content">
        <div className="header-left">
          <span className="header-icon">📝</span>
          <h1>Ghi Chú Cá Nhân</h1>
        </div>
        <div className="header-right">
          <span className="note-count">{noteCount} ghi chú</span>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
