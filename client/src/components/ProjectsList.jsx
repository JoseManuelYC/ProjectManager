import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../graphql/querys'
import { ProjectCard } from './ProjectCard';

export const ProjectsList = () => {
  const {loading, error, data} = useQuery(GET_PROJECTS);
  if(loading) return <p>LOADING</p>;
  if(error) return <p>Error</p>
  return (
    <div className='overflow-y-auto h-96 w-full px-5'>
      {
        data?.projects.map(project => (<ProjectCard key={project._id} project={project} />))
      }
    </div> 
  )
}