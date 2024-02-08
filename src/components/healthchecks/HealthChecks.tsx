import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '@clerk/clerk-react'

export function ServerHealthCheck() {
  if (import.meta.env.VITE_ENV !== 'DEV') return null

  const [data, setData] = useState('')

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/servercheck`)
      .then((data) => {
        console.log(data)
        setData(data?.data)
      })
      .catch((error) => {
        console.log(error.message?.toString())
      })
  }, [])

  if (data === 'OK') return <div>SERVER OK</div>
  return <div>SERVER ERROR</div>
}

export function AuthHealthCheck() {
  if (import.meta.env.VITE_ENV !== 'DEV') return null

  const { getToken } = useAuth()
  const token = getToken()

  const [data, setData] = useState('')

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/authcheck`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        console.log(data)
        setData(data?.data)
      })
      .catch((error) => {
        console.log(error.message?.toString())
      })
  })

  if (data === 'OK') return <div>AUTH OK</div>
  return <div>AUTH ERROR</div>
}

export function DatabaseHealthCheck() {
  if (import.meta.env.VITE_ENV !== 'DEV') return null

  const { getToken } = useAuth()
  const token = getToken()

  const [data, setData] = useState('')

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/dbcheck`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((data) => {
        console.log(data)
        setData(data?.data)
      })
      .catch((error) => {
        console.log(error.message?.toString())
      })
  })

  if (data === 'OK') return <div>DB OK</div>
  return <div>DB ERROR</div>
}
