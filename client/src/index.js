import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Loading from './Components/Loading';
import Container from './Components/Container';
import "./Components/css/App.css"

const App = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  if (!tasks) {
    return <Loading />
  } else {
    return <Container tasks={tasks}/> 
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
