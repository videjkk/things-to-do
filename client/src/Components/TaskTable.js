import React, { useState, useCallback } from "react";
import "./css/TaskTable.css";

const TaskTable = (props) => {
  
  const [sortOrder, setSortOrder] = useState(true);

  const sortTasks = useCallback(sortBy => {

   setSortOrder(!sortOrder);

   sortOrder
    ? props.tasks.sort( (a,b) => a[sortBy] > b[sortBy] ? 1 : -1 ) 
    : props.tasks.sort( (a,b) => a[sortBy] > b[sortBy] ? -1 : 1 ) 
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
            <div key={index} className="task">
              <div className="title">{task.title}</div>
              <div className="id">{task.id}</div>
              <div className="priority">
                <span className={`span-priority ${task.priority}`}>
                  {task.priority}
                </span>
              </div>
              <div className="status">
                <span className={`span-status ${task.status}`}>
                  {task.status ? "done" : "on hold"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(TaskTable);
