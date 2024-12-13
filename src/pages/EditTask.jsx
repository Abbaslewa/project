import { useParams } from 'react-router-dom';

const EditTask = () => {
  
  const { id } = useParams()
  return (
    <div>
        <input type="text" placeholder='website task' />
        <button>Add</button>
      <h2 className='bg-blue-500 text-center p-8 text-white hover:bg-green-300'>EditTask -{id}</h2>
    </div>
  );
}

export default EditTask;
