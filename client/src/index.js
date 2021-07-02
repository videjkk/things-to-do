import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect} from "react"

const App = () => {
  const [task, setTask] = useState(null);
  useEffect(() => {
    const data = fetch("http://localhost:4000")
      .then((response) => response.json())
      .then((data) => setTask(data))
      // .catch(err => );
  }, [task]);

  if(!task){ return <div></div>; }
  else{ return <div> tasks</div>}
};


ReactDOM.render(<App />, document.getElementById("root"));
