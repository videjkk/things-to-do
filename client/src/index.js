import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import "./Components/css/App.css";
import Container from "./Components/Container";
import ContainerHeader from "./Components/ContainerHeader";
import Body from "./Components/Body";

const App = () => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000")
      .then((response) => response.json())
      .then((data) => setTask(data));
    // .catch(err => );
  }, []);

  if (!task) {
    return (
      <div>
        <ContainerHeader />
        <Body />
      </div>
    );
  } else {
    return <Container taskList={task} />;
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
