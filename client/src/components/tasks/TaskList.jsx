import PropTypes from 'prop-types'
import { TaskCard } from './TaskCard';

export function TaskList({tasks}) {

  return (
    <div>
      {
        tasks.map((task) => 
        <TaskCard key={task._id} tasks={task} />
        )
      }
    </div>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
  }))
};
