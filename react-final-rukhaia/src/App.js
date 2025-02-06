import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import RegistrationForm from './pages/RegistrationForm';
import { LanguageProvider } from './language/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registrationForm" element={<RegistrationForm />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
// davigale