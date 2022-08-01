import { Link } from "react-router-dom";
import logo from '../src/assets/logo.jpg';

const UserProfile = () => {
  return (
    <Link to="/profile">
      <img src={logo} alt="logo" style={{ height: '35px' }} />
    </Link>
  )
}


export default UserProfile;