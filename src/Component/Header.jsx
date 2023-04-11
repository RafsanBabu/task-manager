import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../App.css'
function Header() {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state);
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: 0,
      newTask
    }
    newTask != "" ? dispatch({ type: "ADD_TASK", payload: data }) : (alert("please add an task"));
    setNewTask("");
  }
  console.log(tasks);
  return (
    <div className='col-md-12 d-flex add-form justify-content-center'>
      <div>
        <input className='form-add' value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='Write your task ...' />
      </div>
      <div>
        <button type="button" className="btn button-add" onClick={handleAddSubmit}>Add</button>
      </div>
    </div>
  )
}

export default Header