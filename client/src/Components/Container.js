import React from "react";
import "./css/Container.css";
import Body from "./Body";

const Container = (props) => {
  return (
    <div className="container">
      <div className="container__header">
        <p className="container__header-title"> Things.do </p>{" "}
      </div>
      <Body tasks={props.tasks} />
    </div>
  );
};

export default Container;
