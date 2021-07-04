import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import "./Components/css/App.css";
import Container from "./Components/Container";

const App = () => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000")
      .then((response) => response.json())
      .then((data) => setTask(data));
    // .catch(err => );
  }, []);
  console.log(task)
  if (!task) {
    return (
      <div className="wrapper">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  } else {
    return <Container taskList={task}/>;
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
