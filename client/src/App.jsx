import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
// import MainPage from './components/pages/StartPage';
import AddPage from './components/pages/AddPage';
import SignUpPage from './components/pages/SignUpPage';
import SignInPage from './components/pages/SignInPage';
// import TrassaPage from './components/pages/TrassaPage';
import ProtectedRouter from '../src/HOCs/ProtectedRouter';
import useUser from './hooks/useUser';
import StartPage from './components/pages/StartPage';

function App() {
  const { logoutHandler, signInHandler, signUpHandler, user } = useUser();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      children: [
       
        {
          path: '/',
          element: (
            <ProtectedRouter isAllowed={user.status === 'logged'} redirect="/auth/signin">
              <StartPage user={user} />
            </ProtectedRouter>
          ),
        },
        {
          path: '/add',
          element: (
            <ProtectedRouter isAllowed={user.status === 'logged'} redirect="/auth/signin">
              <AddPage user={user} />
            </ProtectedRouter>
          ),
        },
        {
          element: <ProtectedRouter isAllowed={user.status === 'logged'} redirect={'/'} />,
          children: [
            {
              path: '/auth/signup',
              element: <SignUpPage signUpHandler={signUpHandler} />,
            },
            {
              path: '/auth/signin',
              element: <SignInPage signInHandler={signInHandler} />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
