import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        lazy: () => import('./pages/home/home'),
      },
      {
        path: 'about',
        lazy: () => import('./pages/about/about'),
      },
      {
        path: 'blog',
        lazy: () => import('./pages/blog/blog'),
      },
      {
        path: 'community',
        lazy: () => import('./pages/community/community'),
      },
      {
        path: 'download',
        lazy: () => import('./pages/download/download'),
      },
      {
        path: 'dev-diary-1',
        lazy: () => import('./pages/devDiary/devDiary'),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
