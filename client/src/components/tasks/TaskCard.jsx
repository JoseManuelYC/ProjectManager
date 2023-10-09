import PropTypes from 'prop-types'
export function TaskCard({tasks}) {
  return (
    <div>
      <h1>{tasks.title}</h1>
      <button>Delete</button>
    </div>
  )
}
TaskCard.propTypes = {
  tasks: 
    PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
  })
};