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
        className='bg-zinc-900 w-full p-2 rounded-lg mb-2'
        placeholder='Add a Task'
        />
      <button className='bg-yellow-400 w-full p-2 rounded-lg'>Add Task</button>
    </form>
  )
}

