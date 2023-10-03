import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../graphql/querys'
import { ProjectCard } from './ProjectCard';

export const ProjectsList = () => {
  const {loading, error, data} = useQuery(GET_PROJECTS);
  console.log(loading,error,data);
  return (
    <div>
      {
        data?.projects.map(project => (<ProjectCard key={project._id} project={project} />))
      }
    </div> 
  )
}