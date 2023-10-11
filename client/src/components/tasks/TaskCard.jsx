import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'
import { DELETE_TASK } from '../../graphql/tasks/querys';
import { AiOutlineDelete} from 'react-icons/ai'

export function TaskCard({tasks}) {

  const [ deleteTask ] = useMutation(DELETE_TASK,{
    refetchQueries: ['getProject']
  });

  const onDeleteTask = async () => {
    await deleteTask({
      variables: {
        id: tasks._id,
      }
    })
  }
  return (
    <div className='bg-neutral-500 px-5 py-3 mb-3 mt-4 flex justify-between rounded-lg'>
      <h1>{tasks.title}</h1>
      <button onClick={ () => onDeleteTask() }><AiOutlineDelete /></button>
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