import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Loading from './Components/Loading';
import Container from './Components/Container';

const App = () => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000")
      .then((response) => response.json())
      .then((data) => setTask(data));
    // .catch(err => );
  }, []);

  if (!task) {
    return <Loading />
  } else {
    return <Container tasks={task}/> 
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
