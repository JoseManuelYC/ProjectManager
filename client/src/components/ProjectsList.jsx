import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../graphql/querys'
import { ProjectCard } from './ProjectCard';

export const ProjectsList = () => {
  const {loading, error, data} = useQuery(GET_PROJECTS);
  if(loading) return <p>LOADING</p>;
  if(error) return <p>Error</p>
  console.log(loading,error,data);
  return (
    <div>
      {
        data?.projects.map(project => (<ProjectCard key={project._id} project={project} />))
      }
    </div> 
  )
}