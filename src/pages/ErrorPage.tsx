import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center text-white">
      <h1 className="pb-10 text-4xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error occurred.</p>
      <p className="font-light">
        {/* @ts-ignore */}
        <i>{error.data}</i>
      </p>
    </div>
  )
}

export default ErrorPage
