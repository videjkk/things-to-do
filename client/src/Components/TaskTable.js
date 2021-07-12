import React from "react";
import "./css/TaskTable.css";

const TaskTable = (props) => {

  const sortTasks = () => {
    
  }
  
  return (
    <>
      <div className="tasktable header">
        <div className="title">title</div>
        <div className="id">id</div>
        <div className="priority">priority</div>
        <div className="status">status</div>
      </div>
      <div className="tasktable">
        {props.tasks.map( (task) => {
          return (
            <>
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
            </>
          );
        })}
      </div>
    </>
  );
};

export default TaskTable;
