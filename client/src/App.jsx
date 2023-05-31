import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import LoginPage from './pages/auth/Login';
import SignUpPage from './pages/auth/SignUp';
import LandingPage from './pages/Landing';
import RootLayout from './routes/Root';
import Error from './pages/Error';
import AboutPage from './pages/About';
import ServicePage from './pages/Services';
import HomePage from './pages/Home';
import MarketPage from './pages/Market';
import ContactPage from './pages/Contact';
import './stylesheets/main.scss';

const router = createBrowserRouter([
   {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
         { index: true, element: <LandingPage /> },
         { path: '/login', element: <LoginPage /> },
         { path: '/register', element: <SignUpPage /> },
         { path: '/about', element: <AboutPage /> },
         { path: '/services', element: <ServicePage /> },
         { path: '/contact', element: <ContactPage /> },
         { path: '/home', element: <HomePage /> },
         { path: '/market', element: <MarketPage /> },
      ],
   },
]);

function App() {
   return (
      <UserProvider>
         <RouterProvider router={router} />
      </UserProvider>
   );
}

export default App;
