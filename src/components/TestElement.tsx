import {
  AuthHealthCheck,
  DatabaseHealthCheck,
  ServerHealthCheck,
} from './healthchecks/HealthChecks'

const TestElement = () => {
  return (
    <div>
      <ServerHealthCheck />
      <AuthHealthCheck />
      <DatabaseHealthCheck />
    </div>
  )
}

export default TestElement
