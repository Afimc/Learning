import { useState } from 'react';
import './Element.css';


function Element(props) {
  const [isEditeMode,setEditMode] = useState(false)
  const [itemStatus,setItemStatus]=useState(props.task.status)
  function onCancel(){
    setEditMode(false)
    setItemStatus(props.task.status)

  }

  function saveChanges(){
    props.edit(props.task.id,itemStatus)
    setEditMode(false)
  }
  return (
    <div className="Element">
      <p id='task'>{props.task.task }</p>
      {
        isEditeMode
          ?  <select value={itemStatus} onChange={(event)=>setItemStatus(event.target.value)}>
              <option value='inprogres'>inprogres</option>
              <option value='done'>done</option>
             </select>
          :  <p id='status'>{props.task.status }</p>
      }
     
      <p id='deadline'>{props.task.deadline }</p>
      <p id='lastModified'>{props.task.lastModified }</p>
      {
        isEditeMode 
          ? <div className='buttons'>
              <button onClick={()=>saveChanges()}>save</button>
              <button onClick={()=>onCancel()}>cancel</button>
            </div> 
          : <div className='buttons'>
              <button onClick={()=>setEditMode(true)}>Edit</button>
              <button onClick={()=>props.delete(props.task.id)}>Delete</button>
            </div>
      }


    </div>
  );
}

export default Element;