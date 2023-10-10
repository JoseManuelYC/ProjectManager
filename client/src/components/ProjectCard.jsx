import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export const ProjectCard = ({project}) => {
  const navigate = useNavigate()
  return (
    <div className='bg-zinc-800 w-full rounded-lg shadow-lg shadow-black p-4 mb-2 hover:bg-zinc-900 hover:cursor-pointer'
     onClick={ () => navigate(`/projects/${project._id}`) }>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
  })
};