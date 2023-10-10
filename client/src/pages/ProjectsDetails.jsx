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
        <button className="bg-yellow-500 px-4 py-1 rounded-md text-lg mb-3">Back</button>
      </Link>
      <div className="bg-zinc-900 mb-2 p-10 flex justify-between">
        <div>
          <h1 className="text-2x1">{data.project.name}</h1>
          <p>{data.project.description}</p>
        </div>
      </div>
      <button className="bg-red-500 px-3 py-2 rounded-lg">Delete</button>
      <TaskForm />
      <TaskList tasks={data.project.tasks} />
    </div>
  )
}
