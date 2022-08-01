import { Link } from "react-router-dom";
import logo from '../src/assets/home.jpg';

const Header = ({ children }) => {
  const styles = {
    height: '40px',
    background: 'cornflowerblue',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15px'
  };

  return (
    <nav style={{...styles}}>
      <Link 
        style={{display: 'flex', alignItems:'center'}}
        to="/"
      >
        <img src={logo} alt="home" style={{ height: '35px'}} />
      </Link>
      {children}
    </nav>
  )
}

export default Header;