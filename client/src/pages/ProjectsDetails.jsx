import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { GET_PROJECT } from "../graphql/querys"

export const ProjectsDetails = () => {
  const params = useParams()
  const {loading,data,error} = useQuery(GET_PROJECT,{
    variables: {
      id: params.id
    }
  })
  const { name,description} = data.project;
  if(loading) return <p>LOADINBG</p>;
  if(error) return <p>Error</p>;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
