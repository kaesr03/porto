import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppLayout from './ui/AppLayout';
import Experiences from './features/experience/Experiences';
import Projects from './features/project/Projects';

// import Home from './features/home/Home';

const Home = lazy(() => import('./features/home/Home'));

const router = createBrowserRouter([
  {
    path: '',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/experiences',
        element: <Experiences />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
