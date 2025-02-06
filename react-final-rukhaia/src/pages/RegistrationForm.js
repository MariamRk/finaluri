import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const RegistrationPage = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Must be at least 3 characters').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [isRegistrationSuccess, setRegistrationSuccess] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ge' : 'en');
    
  };

  const onSubmit = (data) => {
   
    console.log(data);
    setRegistrationSuccess(true);
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      {isRegistrationSuccess ? (
        <nav className="nav">
          <ul>
            <p>Thank you for working with us!</p>
            <li><Link to="/about">{language === 'en' ? 'About' : 'ჩვენს შესახებ'}</Link></li>
            <li><Link to="/contact">{language === 'en' ? 'Contact' : 'კონტაქტი'}</Link></li>
            <li><Link to="/">{language === 'en' ? 'Home' : 'მთავარი'}</Link></li>
          </ul>
        </nav>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username">{language === 'en' ? 'Username' : 'მომხმარებლის სახელი'}</label>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <>
                  <input {...field} />
                  {errors.username && <div>{errors.username.message}</div>}
                </>
              )}
            />
          </div>

          <div>
            <label htmlFor="email">{language === 'en' ? 'Email' : 'ელ. ფოსტა'}</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <>
                  <input {...field} />
                  {errors.email && <div>{errors.email.message}</div>}
                </>
              )}
            />
          </div>

          <div>
            <label htmlFor="password">{language === 'en' ? 'Password' : 'პაროლი'}</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <>
                  <input type="password" {...field} />
                  {errors.password && <div>{errors.password.message}</div>}
                </>
              )}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">{language === 'en' ? 'Confirm Password' : 'გაიმეორეთ პაროლი'}</label>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <>
                  <input type="password" {...field} />
                  {errors.confirmPassword && <div>{errors.confirmPassword.message}</div>}
                </>
              )}
            />
          </div>

          <button type="submit">{language === 'en' ? 'Register' : 'რეგისტრაცია'}</button>
        </form>
      )}
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
};

export default RegistrationPage;