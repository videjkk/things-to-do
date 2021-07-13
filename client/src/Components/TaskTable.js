import React, { useState, useCallback } from "react";
import "./css/TaskTable.css";

const TaskTable = (props) => {
  
  const [sortBy, setSortBy] = useState('title');
  const [sortOrder, setSortOrder] = useState(true);

 const sortTasks = useCallback(sortBy => {
   setSortBy(sortBy);
   setSortOrder(!sortOrder);
   sortOrder ? 
   props.tasks.sort( (a,b) => a[sortBy] > b[sortBy] ? 1 : -1 ) 
   :
   props.tasks.sort( (a,b) => a[sortBy] > b[sortBy] ? -1 : 1 ) 
 },
 [sortOrder, props.tasks])
  
  return (
    <>
      <div className="tasktable header">
        <div onClick={ () => sortTasks('title')} className={`title `}>title</div>
        <div  onClick={ () => sortTasks('id')} className="id">id</div>
        <div  onClick={ () => sortTasks('priority')} className="priority">priority</div>
        <div  onClick={ () => sortTasks('status')} className="status">status</div>
      </div>
      <div className="tasktable">
        {props.tasks.map( (task, index) => {
          return (
            <>
              <div key={task.title} className="title">{task.title}</div>
              <div key={task.id} className="id">{task.id}</div>
              <div key={task.priority} className="priority">
                <span className={`span-priority ${task.priority}`}>
                  {task.priority}
                </span>
              </div>
              <div key={task.status} className="status">
                <span className={`span-status ${task.status}`}>
                  {task.status ? "done" : "on hold"}
                </span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(TaskTable);
