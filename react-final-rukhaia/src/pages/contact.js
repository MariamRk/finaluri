import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function Contact() {
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
      <h1>{language === 'en' ? 'Contact Page' : 'კონტაქტი'}</h1>
      <div>
        <p>
          {language === 'en'
            ? 'Feel free to contact us for any inquiries or information.'
            : 'მოგესალმებით! თუ რაიმე შეკითხვა გაგიჩნათ, დაგვიკავშირდით.'}
        </p>
        <h3>{language === 'en' ? 'Contact Information' : 'საკონტაქტო ინფორმაცია'}</h3>
        <p>Email: ligma@deez.com</p>
        <p>Phone: +69420</p>

        <nav className="nav">
          <ul>
            <li><Link to="/about">{language === 'en' ? 'About' : 'ჩვენს შესახებ'}</Link></li>
            <li><Link to="/">{language === 'en' ? 'Home' : 'მთავარი'}</Link></li>
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

export default Contact;
