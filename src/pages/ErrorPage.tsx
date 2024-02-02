type pageProps = {
  error?: string
}

const ErrorPage = ({ error }: pageProps) => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <h1 className="pb-10 text-4xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error occurred.</p>
      <p className="font-light">
        <i>{error || 'Not found'}</i>
      </p>
    </div>
  )
}

export default ErrorPage
