import React from "react";
import "./css/Container.css";
import Body from "./Body";
import TaskTable from "./TaskTable";

const Container = (props) => {
  return (
    <div className="container">
      <div className="container__header">
        <p className="container__header-title"> Things.do</p>
      </div>
      <TaskTable tasks={props.tasks} />
    </div>
  );
};

export default Container;
