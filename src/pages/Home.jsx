import { useParams } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();  

  return (
    <div className='flex items-center justify-center mt-10'>
      <div className="p-4 text-center bg-white shadow-2xl w-[30%] rounded-lg">
        <h2>Edit Task</h2> 
          <div className="flex justify-between items-center w-[30%] space-x-3">
            <input type="text" className="border p-2 rounded-lg " placeholder="Edit task" />
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Add {id}</button>
          </div>
      </div>
    </div>
  );
};

export default EditTask;
