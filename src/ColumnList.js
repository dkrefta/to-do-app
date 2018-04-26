import React from 'react';
import If from './If'
import './ColumnList.css';

const ColumnList = ({ tasks, columnTitle, updateTask, addTask }) => {
  return (
  <div className="column-list">
   <h3> {columnTitle} </h3>
     <If test = {columnTitle === 'To Do'}>
     <form onSubmit={addTask}>
     <input type="text" />
     <button type="submit"> Criar Tarefa Nova </button>
     </form>
     </If>

   <ul>
   {tasks.map(task => (
     <li key={task.id}>
     <input
     type="checkbox"
     onChange={updateTask}
     checked={false}
     />
     <span> {task.description}</span>
   </li>
   ))}
   </ul>
  </div>
  );
};


export default ColumnList;
