import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import logo from '../../assets/logo.png';
import './Login.css'

const Login = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert('Please enter your email.');
      return;
    }
    setStep(2);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!password.trim()) {
      alert('Please enter your password.');
      return;
    }
    console.log('Logging in with:', { email, password });
  };

  const handleBackHome = () => {
    navigate('/'); // Go back to home route
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />

      <form onSubmit={step === 1 ? handleNext : handleLogin}>
        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br />
            <button type="submit" className="next-btn">Next</button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button type="submit" className="login-btn">Login</button>
          </>
        )}
      </form>

      <button className="back-home-btn" onClick={handleBackHome}>Back Home</button>

      <footer className="footer">© 2025 Umba Create. All rights reserved.</footer>
    </div>
  );
};

export default Login;
