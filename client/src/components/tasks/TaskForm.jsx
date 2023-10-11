import {useMutation} from '@apollo/client'
import { useParams } from 'react-router-dom'
import { CREATE_TASK  } from '../../graphql/tasks/querys'

export function TaskForm() {

  const [createTask] = useMutation(CREATE_TASK,{
    refetchQueries : ['getProject'],
  });
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({
      variables: {
        title: e.target.title.value,
        projectId: params.id
      }
    })
    e.target.reset();
    e.target.focus();
  }
  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        name="title"
        className='bg-white-900 w-full p-5 rounded-lg mb-4 mt-4'
        placeholder='Add a Task'
        />
      <button className='bg-yellow-400 text-stone w-full p-2 rounded-lg hover:bg-yellow-500 hover:cursor-pointer'>Add Task</button>
    </form>
  )
}

