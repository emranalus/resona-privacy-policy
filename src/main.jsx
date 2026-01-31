import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import PrivacyPolicy from './PrivacyPolicy.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/privacy" replace />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
], {
  basename: "/resona-privacy-policy",
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
