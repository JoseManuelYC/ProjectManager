import { useQuery } from "@apollo/client"
import { Link, useParams } from "react-router-dom"
import { GET_PROJECT } from "../graphql/querys"
import { TaskList } from "../components/tasks/TaskList"
import { TaskForm } from "../components/tasks/TaskForm"

export const ProjectsDetails = () => {
  const params = useParams()
  const {loading,data,error} = useQuery(GET_PROJECT,{
    variables: {
      id: params.id
    },
    skip: !params.id
  })
  if(loading) return <p>LOADING</p>;
  if(error) return <p>Error</p>;

  return (
    <div>
      <Link to="/projects">
        <button className="bg-yellow-500 px-4 py-1 rounded-lg text-lg mb-3 hover:bg-yellow-600">Back</button>
      </Link>
      <div className="bg-zinc-800 mb-2 p-10 rounded-lg">
        <div className="flex justify-center">
          <h1 className="text-2xl">{data.project.name}</h1>
        </div>
        <div className="flex justify-center">
          <p>{data.project.description}</p>
        </div>
      </div>
      <div className="flex justify-center">
      <button className="bg-red-500 px-3 py-2 rounded-lg hover:bg-red-600">Delete Project</button>
      </div>
      <TaskForm />
      <TaskList tasks={data.project.tasks} />
    </div>
  )
}
