import PropTypes from 'prop-types'

export const ProjectCard = ({project}) => {
  return (
    <div>
      <ul>
        <li>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </li>
      </ul>
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