import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import authorPhoto from '../media/Rick.jpg';
import '../styles/styles.css';

function About() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ge' : 'en');
   
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>{language === 'en' ? 'About Page' : 'ჩვენს შესახებ'}</h1>
      <div>
        <img src={authorPhoto} alt="Author" style={{ width: '150px', borderRadius: '50%' }} />
        <h2>{language === 'en' ? 'Author: Rick Astley' : 'ავტორი: რიკ ასტლი'}</h2>
        <p>
          {language === 'en'
            ? "Guy who never gave you up before and won't give you up in the future"
            : 'კაცი რომელსაც არასდროს არ უღალატია და არასდროს არ გიღალატებს'}
        </p>
        
        <nav className="nav">
          <ul>
            <li><Link to="/">{language === 'en' ? 'Home' : 'მთავარი'}</Link></li>
            <li><Link to="/contact">{language === 'en' ? 'Contact' : 'კონტაქტი'}</Link></li>
            <li><Link to="/registration">{language === 'en' ? 'Registration' : 'რეგისტრაცია'}</Link></li>
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
    </div>
  );
}

export default About;
