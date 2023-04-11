import React from 'react'

import Draggable from 'react-draggable'; // The default
import {DraggableCore} from 'react-draggable'; // <DraggableCore>
import { useSelector } from 'react-redux';

import '../App.css'
import handleTaskReducer from '../Redux/Reducer/handleTaskReducer';
function TodoList() {
  const tasks = useSelector((taskState) => taskState);

  return (
    <div className='row'>
        <div className='todo-list  d-flex justify-content-around'>
          <div className='col-md-3 text-center todo-list-column'>
              <label className='text-center list-item-header'>
                  Todo
              </label>
              {
                tasks.map((item) => {
                  return(
                  <Draggable>
                    <div className='list-item text-center'>
                      <p className='list-item text-center'>{item.newTask}</p>
                    </div>
                  </Draggable>)
                })
              }
              
          </div>
          <div className='col-md-3 text-center todo-list-column'>
              
              <label className='text-center list-item-header'>
              In progress
              </label>
          </div>
          <div className='col-md-3 text-center todo-list-column'>
            <label className='text-center list-item-header'>Done</label>
          </div>
        </div>
    </div>
  )
}

export default TodoList