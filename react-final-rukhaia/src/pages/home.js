import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function Home() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ge' : 'en');
    
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>{language === 'en' ? 'Welcome to our Website' : 'მოგესალმებით ჩვენს საიტზე'}</h1>
      <p>
        {language === 'en'
          ? 'This is the home page of our awesome website.'
          : 'ეს არის ჩვენი არაჩვეულებრივი საიტი'}
      </p>

      <nav className="nav">
        <ul>
          <li><Link to="/about">{language === 'en' ? 'About' : 'ჩვენს შესახებ'}</Link></li>
          <li><Link to="/contact">{language === 'en' ? 'Contact' : 'კონტაქტი'}</Link></li>
          <li><Link to="/RegistrationForm">{language === 'en' ? 'Registration' : 'რეგისტრაცია'}</Link></li>
        </ul>
      </nav>

      <button className="switch-button" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <img src="../media/sun.png" alt="Light Mode" />
        ) : (
          <img src="../media/moon.png" alt="Dark Mode" />
        )}
      </button>

      <button className="switch-button" onClick={toggleLanguage}>
        {language === 'en' ? 'Switch to Georgian' : 'ინგლისურზე შეცვლა'}
      </button>
    </div>
  );
}

export default Home;
