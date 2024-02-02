import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

import './index.css'
import ErrorPage from './pages/ErrorPage'
import RootPage from './pages/RootPage'

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ClerkProvider publishableKey={clerkKey}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ClerkProvider>
)
