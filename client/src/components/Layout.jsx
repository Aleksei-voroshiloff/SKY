import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './ui/NavBar';

export default function Layout({ user, logoutHandler }) {
  return (
    <div>
      <NavBar user={user} logoutHandler={logoutHandler} />
      <Outlet />
    </div>
  );
}
