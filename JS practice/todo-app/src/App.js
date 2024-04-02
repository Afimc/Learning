import Element from './Element';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {getTasksResultFunction, editTaskFunction, addTaskFunction} from './tools.js'

function App() {
  const [tasks, setTasks] = useState([]);
  const [upcomingError, setUpcomingError] = useState('')
  const [taskInput, setTaskInput] = useState('');
  const [deadlineInput, setDeadlineInput] = useState('');
  const [sortChecked, setSortChecked] = useState(false);
  const [doneChecked, setDoneChecked] = useState(false);
  const [inprogresChecked, setInprogresChecked] = useState(false);
  const port = 'http://localhost:8000/'


  useEffect(() => {
    getTasksResultFunction(doneChecked,inprogresChecked,sortChecked)
      .then(result => {
        setTasks(result.data)
      })
      .catch(error => {
        const errorMessage = error.response ? error.response.data : 'Error'
        setUpcomingError(errorMessage)
      })
  }, [])


  // function getTasksResultFunction(doneChecked,inprogresChecked,sortChecked){
  //   const getTasksResultUrl = port + 'get-list';
  //   let params ={};
  //   if (doneChecked) params.filterByStatus = 'done'
  //   if (inprogresChecked) params.filterByStatus = 'inprogres'
  //   if (sortChecked) params.sortBydeadline = 'deadline'

  //  return axios.get(getTasksResultUrl, {params})

    // .then(result => {
    //   return result.data
    // })
    // .catch(error =>{
    //   const errorMessage = error.response ? error.response.data : 'Error'
    //   setUpcomingError(errorMessage)
    // })
    // return
  // }


   async function getList(){
    try {
     
      setUpcomingError('')
      const res = await getTasksResultFunction(doneChecked,inprogresChecked,sortChecked)
      setTasks(res.data)
    } catch (error) { 
      const errorMessage = error.response ? error.response.data : 'Error'
      setUpcomingError(errorMessage)
    }
  }

  async function addNewTask() {
    try {
      setUpcomingError('')
      // const addNewTaskUrl =port+'add-new-task'
      // const addParams = {
      //     task : taskInput,
      //     deadline : deadlineInput,
      //     status:'inprogres'
      //   };
      //   const options = {params:addParams}



      const AddedTask = await addTaskFunction(taskInput, deadlineInput)
      const getTasksResult = await getTasksResultFunction(doneChecked,inprogresChecked,sortChecked)
      setTasks(getTasksResult.data)
    } catch (error) {
      const errorMessage = error.response ? error.response.data : 'Error'
      setUpcomingError(errorMessage)
    } finally{
      setTaskInput('')
      setDeadlineInput('')
    }
  }

  async function editStatus(taskId, newStatus) {
    try {
      setUpcomingError('')
      const updatedStatusResult = await editTaskFunction(taskId,newStatus)
      const getTasksResult = await getTasksResultFunction(doneChecked,inprogresChecked,sortChecked)
      setTasks(getTasksResult.data)
    } catch (error) {
      const errorMessage = error.response ? error.response.data : 'Error'
      setUpcomingError(errorMessage)
    }
  }

  function deleteTask(taskId) {
    axios.post(port+'delete?id=' + taskId)
      .then(result => {
        setUpcomingError('')
        setTasks(result.data)
      })
      .catch(error => {
      const errorMessage = error.response ? error.response.data : 'Error'
      setUpcomingError(errorMessage)
      })
  }

  return (
    <div className="App">
    { 
      upcomingError ? <p>{upcomingError}</p>:null
    }
   
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
