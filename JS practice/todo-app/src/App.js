import Element from './Element';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [deadlineInput, setDeadlineInput] = useState('');
 

  useEffect(() => {
    axios.get('http://localhost:8000/get-list')
      .then(result => {
        setTasks(result.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  function addNewTask() {
    const newItem = {
      id: tasks.length + 1,
      task: taskInput,
      status: 'inprogres',
      deadline: deadlineInput,
      lastModified: new Date().toDateString()
    }
    const newArray = [newItem, ...tasks]
    setTasks(newArray)
    setTaskInput('')
    setDeadlineInput('')
  }

  async function editStatus(taskId, newStatus) {
    try {
      const updatedStatusResult = await axios.post('http://localhost:8000/change-status?id='+taskId+'&updatingStatus='+newStatus)
      const getTasksResult = await  axios.get('http://localhost:8000/get-list')
      setTasks(getTasksResult.data)
    } catch (error) {
      console.log(error)
    }
  }

  function deleteTask(taskId) {
    axios.post('http://localhost:8000/delete?id=' + taskId)
      .then(result => {
        console.log(result)
        setTasks(result.data)
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  return (
    <div className="App">
      <div className='newTask'>
        <input value={taskInput} onChange={(event) => setTaskInput(event.target.value)} placeholder='task'></input>
        <input value={deadlineInput} onChange={(event) => setDeadlineInput(event.target.value)} placeholder='deadline'></input>
        <button onClick={() => addNewTask()} className='addButon'>Add New Task</button>
      </div>
      {tasks.map((e) => {
        return <Element edit={editStatus} delete={deleteTask} task={e} key={e.id} />
      })}
    </div>
  );
}

export default App;
