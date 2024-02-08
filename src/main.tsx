import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

import './index.css'
import ErrorPage from './pages/ErrorPage'
import RootPage from './pages/RootPage'
import TestElement from './components/TestElement'

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'prod',
        element: <TestElement />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ClerkProvider publishableKey={clerkKey}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ClerkProvider>
)

// CLERK USER INJECTIONS
// At the moment, routes that require auth are failing from postman (because of timeout). add a component to the frontend to test this out.
// Rewrite healthcheck routes to check the health of the server and database connection.
// use webhooks to trigger a user entry into the db, when a user registers.
// at the moment the post endpint is not supported. for now just make sure the server accepts the request.
// Rewrite the functions on the clerk webhok routes to add users as they log in.

// DATABASE SCHEMA REDO
// Design and implement a new database schema similar to the one overleaf
