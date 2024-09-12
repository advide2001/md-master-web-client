import { useAuth, useUser } from '@clerk/clerk-react'
import { useQuery } from '@tanstack/react-query'

const ProjectPage = () => {
  const { getToken } = useAuth()
  const template = 'jwt-prod-md-master'
  const { user } = useUser()

  const { data: markdownDocuments } = useQuery({
    queryKey: ['markdownDocuments'],
    queryFn: async () =>
      fetch(`${import.meta.env.VITE_SERVER_URL}/projects?userId=${user?.id}`, {
        headers: { Authorization: `Bearer ${await getToken({ template })}` },
      }).then((response) => response.json()),
  })

  console.log(markdownDocuments)

  return (
    <div className="mx-auto max-w-2xl text-center text-white">
      <h1 className="text-3xl font-bold tracking-tight">Project Page</h1>
    </div>
  )
}

export default ProjectPage
