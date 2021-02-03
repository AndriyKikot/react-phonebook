import { useSelector } from 'react-redux';

import Navigation from '../Navigation';
import UserMenu from './UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth/auth-selectors.js';
import styles from './AuthNav.module.css';

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
