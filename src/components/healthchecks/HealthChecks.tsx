import { useAuth } from '@clerk/clerk-react'
import { useQuery } from '@tanstack/react-query'

export function ServerHealthCheck() {
  if (import.meta.env.VITE_ENV !== 'DEV') return null
  const { getToken } = useAuth()

  const { isPending, error, data } = useQuery({
    queryKey: ['healthCheck'],
    queryFn: async () =>
      fetch(`${import.meta.env.VITE_SERVER_URL}/servercheck`, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      }).then((response) => response.json()),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An Error has occured: ' + error.message

  return <div>{data.status}</div>
}

export function AuthHealthCheck() {
  if (import.meta.env.VITE_ENV !== 'DEV') return null

  const { getToken } = useAuth()

  const { isPending, error, data } = useQuery({
    queryKey: ['authcheck'],
    queryFn: async () =>
      fetch(`${import.meta.env.VITE_SERVER_URL}/authcheck`, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      }).then((response) => response.json()),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An Error has occured: ' + error.message

  return <div>{data.status}</div>
}

export function DatabaseHealthCheck() {
  if (import.meta.env.VITE_ENV !== 'DEV') return null

  const { getToken } = useAuth()

  const { isPending, error, data } = useQuery({
    queryKey: ['dbcheck'],
    queryFn: async () =>
      fetch(`${import.meta.env.VITE_SERVER_URL}/dbcheck`, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      }).then((response) => response.json()),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An Error has occured: ' + error.message

  return <div>{data.status}</div>
}
