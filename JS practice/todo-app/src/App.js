import Element from './Element';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [deadlineInput, setDeadlineInput] = useState('');
  const [sortChecked, setSortChecked] = useState(false);
  const [doneChecked, setDoneChecked] = useState(false);
  const [inprogresChecked, setInprogresChecked] = useState(false);
  const port = 'http://localhost:8000/'
 

  useEffect(() => {
    axios.get(port+'get-list')
      .then(result => {
        setTasks(result.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  async function getList(){
    try {
      let getTasksResult
      if (doneChecked){
          getTasksResult = await  axios.get(port+'get-list?filterByStatus=done')
        if(sortChecked){
           getTasksResult = await  axios.get(port+'get-list?filterByStatus=done&sortBydeadline=deadline')
        }
      } else if(inprogresChecked){
          getTasksResult = await  axios.get(port+'get-list?filterByStatus=inprogres')
        if(sortChecked){
          getTasksResult = await  axios.get(port+'get-list?filterByStatus=inprogres&sortBydeadline=deadline')
        }
      } else if(sortChecked){
        getTasksResult = await  axios.get(port+'get-list?sortBydeadline=deadline')
     
      }

      setTasks(getTasksResult.data)
    } catch (error) {
      
    }
  }

  async function addNewTask() {
    try {
      const AddedTask = await axios.post(port+'add-new-task?task='+taskInput+'&deadline='+deadlineInput+'&status=inprogres')
      const getTasksResult = await  axios.get(port+'get-list')
      setTasks(getTasksResult.data)
    } catch (error) {
      console.log(error)
    }
    setTaskInput('')
    setDeadlineInput('')

  }

  async function editStatus(taskId, newStatus) {
    try {
      const updatedStatusResult = await axios.post(port+'change-status?id='+taskId+'&updatingStatus='+newStatus)
      const getTasksResult = await  axios.get(port+'get-list')
      setTasks(getTasksResult.data)
    } catch (error) {
      console.log(error)
    }
  }

  function deleteTask(taskId) {
    axios.post(port+'delete?id=' + taskId)
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
      <div className='optionMenu'>
        <div className='checkMenu'>
        
          <label><input type="checkbox" checked={sortChecked} onChange={()=>setSortChecked(!sortChecked)}/>Sorter by deadline</label>
          <label><input type="checkbox" checked={doneChecked} onChange={()=>setDoneChecked(!doneChecked)}/>Show only status Done</label>
          <label><input type="checkbox" checked={inprogresChecked} onChange={()=>setInprogresChecked(!inprogresChecked)}/>Show only status In Progres</label>
          <button id='refresh' onClick={()=>getList()}>Refresh</button>
        </div>
        <div className='newTask'>
          <input id='taskInput' value={taskInput} onChange={(event) => setTaskInput(event.target.value)} placeholder='task'></input>
          <input id='deadlineInput' value={deadlineInput} onChange={(event) => setDeadlineInput(event.target.value)} placeholder='deadline YYYY-MM-DD'></input>
          <button className='addButon' onClick={() => addNewTask()} >Add New Task</button>
        </div>
      </div>

      {tasks.map((e) => {
        return <Element edit={editStatus} delete={deleteTask} task={e} key={e.id} />
      })}
    </div>
  );
}

export default App;
