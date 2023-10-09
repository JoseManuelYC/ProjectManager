import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
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
      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>
      <button>Delete</button>
      <TaskForm />
      <TaskList tasks={data.project.tasks} />
    </div>
  )
}
