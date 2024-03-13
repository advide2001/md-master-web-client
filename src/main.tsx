import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import './index.css'
import ErrorPage from './pages/ErrorPage'
import RootPage from './pages/RootPage'
import TestElement from './components/TestElement'
import LandingPage from './pages/LandingPage'

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: 'prod',
        element: <TestElement />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ClerkProvider publishableKey={clerkKey}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ClerkProvider>
  </QueryClientProvider>
)
