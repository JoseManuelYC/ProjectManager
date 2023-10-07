import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export const ProjectCard = ({project}) => {
  const navigate = useNavigate()
  return (
    <div onClick={ () => navigate(`/projects/${project._id}`) }>
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