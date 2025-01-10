import Layout from './components/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './components/ui/LoginForm';
import RegisterForm from './components/ui/RegisterForm';
import ProtectedRouter from './HOCs/ProtectedRouter';
import NotFoundPage from './components/pages/NotFoundPage';
import useUser from './hooks/useUser';
import AddPage from './components/pages/AddPage';
import { useState } from 'react';
import StartPage from './components/pages/StartPage';

function App() {
  const { user, loginHandler, logoutHandler, registerHandler } = useUser();
  const [activeItem, setActiveItem] = useState('Книги');

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout
          logoutHandler={logoutHandler}
          user={user}
          handleItemClick={handleItemClick}
          activeItem={activeItem}
        />
      ),
      children: [
        {
          path: '/home',
          element: (
            <ProtectedRouter isAllowed={user.status === 'logging'} redirectTo={'/home'}>
              <StartPage user={user} />
            </ProtectedRouter>
          ),
        },

        {
          path: '/addTrassa',
          element: (
            <ProtectedRouter isAllowed={user.status === 'guest'} redirectTo={'/home'}>
              <AddPage user={user} />
            </ProtectedRouter>
          ),
        },
        {
          element: (
            <ProtectedRouter isAllowed={user.status === 'logged'} redirectTo={'/home'} />
          ),
          children: [
            {
              path: '/signin',
              element: <LoginForm loginHandler={loginHandler} />,
            },
            {
              path: '/signup',
              element: <RegisterForm registerHandler={registerHandler} />,
            },
          ],
        },
        {
          path: '*',
          element: (
            <NotFoundPage handleItemClick={handleItemClick} activeItem={activeItem} />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
