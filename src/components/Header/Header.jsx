import { useNavigate } from 'react-router-dom';
import './Header.css'; 
import heroImg from '../../assets/site-cover.jpeg'

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="header-bg">
        <img src={heroImg} alt="Header Background" className="bg-img" />
        
        <button className="login-btnn" onClick={() => navigate('/login')}>
        Login
      </button>
      
        <button className="middle-btn" onClick={() => navigate('/login')}>
          GO TO TRAINING
        </button>
      </div>
    </div>
  );
}

export default Header;

