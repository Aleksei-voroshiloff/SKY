import Layout from './components/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StartPage from './components/pages/StartPage';
import AddPage from './components/pages/AddPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <StartPage /> },
        { path: '/addtrassa', element: <AddPage /> },
        { path: '/', element: <StartPage /> },
        // { path: '/signin', element: <LoginForm loginHandler={loginHandler} /> },
        // { path: '/signup', element: <RegisterForm registerHandler={registerHandler} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
