import React, { useState, useCallback, useEffect } from "react";
import "./css/TaskTable.css";
import "./css/Body.css";
import useDebounce from "./use-debounce";
import Button from "./css/styled-components/Button";
import Task from "./Task";

const TaskTable = (props) => {
  const [tasksToShow, setTasksToShow] = useState(props.tasks.slice(0, 10));
  const [tasksCount, setTasksCount] = useState(20);
  const [sortOrder, setSortOrder] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(tasksToShow);
  const [color, setColor] = useState("#000");

  useEffect(() => {
    setSearchResult(
      tasksToShow.filter((task) => task.title.toLowerCase().includes(search))
    );
  }, [tasksToShow, search]);

  const sortTasks = useCallback(
    (sortBy) => {
      setSortOrder(!sortOrder);
      sortOrder
        ? searchResult.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
        : searchResult.sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1));
    },
    [sortOrder, searchResult]
  );

  const showMore = () => {
    setTasksToShow(props.tasks.slice(0, tasksCount));
    setTasksCount(tasksCount + 10);
    setColor(`rgb(0, 0, ${tasksCount})`);
  };

  const handleChange = useDebounce((e) => {
    setSearch(e.target.value);
  }, 500);

  return (
    <>
      <div className="body">
        <input
          className="search"
          type="search"
          placeholder="Search a thing to do..."
          onChange={handleChange}
        />
      </div>
      <div className="tasktable header">
        <div onClick={() => sortTasks("title")}>title</div>
        <div onClick={() => sortTasks("id")}>id</div>
        <div onClick={() => sortTasks("priority")}>priority</div>
        <div onClick={() => sortTasks("status")} >status</div>
      </div>
      <div className="tasktable">
        {searchResult.map((task, index) => {
          return <Task task={task} key={index} />;
        })}
        {!search && tasksCount > props.tasks.length 
          ? ""
          : <Button color={color} onClick={() => showMore()}>Show more</Button>
        }
      </div> 
    </>
  );
};

export default React.memo(TaskTable);
