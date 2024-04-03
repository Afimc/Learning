import axios from 'axios';

const port = 'http://localhost:8000/'


function getTasksResultFunction(doneChecked,inprogresChecked,sortChecked){
    const getTasksResultUrl = port + 'get-list';
    let params ={};
    if (doneChecked) params.filterByStatus = 'done'
    if (inprogresChecked) params.filterByStatus = 'inprogres'
    if (sortChecked) params.sortBydeadline = 'deadline'

   return axios.get(getTasksResultUrl, {params})
}


function addTaskFunction(taskInput,deadlineInput){
    const addNewTaskUrl =port+'add-new-task'
    const addParams = {
        task : taskInput,
        deadline : deadlineInput,
        status:'inprogres'
      };
      const options = {params:addParams}
      return axios.post(addNewTaskUrl, null, options)
}


function editTaskFunction(taskId,newStatus){
    const changeStatusUrl =port+'change-status'
    const updateParams = {
        id : taskId,
        updatingStatus : newStatus
      };
      const options = {params:updateParams}
      return axios.post(changeStatusUrl, null, options)
}

function deleteTaskFunction(taskId){
    const deleteTaskUrl = port + 'delete'
    const params={id:taskId}
    return axios.post(deleteTaskUrl, null, {params})
  }


export  {getTasksResultFunction, editTaskFunction, addTaskFunction, deleteTaskFunction}