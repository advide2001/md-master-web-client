import {
  AuthHealthCheck,
  DatabaseHealthCheck,
  ServerHealthCheck,
} from './healthchecks/HealthChecks'

const TestElement = () => {
  return (
    <div className="font-semibold text-white">
      <ServerHealthCheck />
      <AuthHealthCheck />
      <DatabaseHealthCheck />
      <div className="flex gap-10 bg-white">
        <div className="m-4 h-20 w-32 bg-primary-1"></div>
        <div className="m-4 h-20 w-32 bg-primary-2"></div>
        <div className="m-4 h-20 w-32 bg-primary-2"></div>
        <div className="m-4 h-20 w-32 bg-accent-color"></div>
      </div>
    </div>
  )
}

export default TestElement
