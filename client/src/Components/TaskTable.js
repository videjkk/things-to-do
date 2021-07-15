import React, { useState, useCallback, useEffect } from 'react'
import './css/TaskTable.css'
import './css/Body.css'
import useDebounce from './use-debounce';


const TaskTable = (props) => {
  const [tasksToShow, setTasksToShow] = useState(props.tasks.slice(0,10));
  const [tasksCount, setTasksCount] = useState(20);
  const [sortOrder, setSortOrder] = useState(false);
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState(tasksToShow)

  useEffect(() => {
    setSearchResult(tasksToShow.filter(task => task.title.toLowerCase().includes(search)))
  }, [tasksToShow, search]);

  
  const sortTasks = useCallback(sortBy => {
    setSortOrder(!sortOrder)
    sortOrder
    ? searchResult.sort( (a, b) => a[sortBy] > b[sortBy] ? 1 : -1)
    : searchResult.sort( (a, b) => a[sortBy] > b[sortBy] ? -1 : 1)
  },
  [sortOrder, searchResult])
  
  const showMore = () => {
    setTasksToShow(props.tasks.slice(0,tasksCount));
    setTasksCount(tasksCount+10)
  }

  const handleChange = useDebounce((e) => {
    setSearch(e.target.value)
  }, 500);

  return (
    <>
    <div className="body">
          <input className='search'  type="search" placeholder="Search a thing to do..." onChange={handleChange}/>
      </div>
      <div className="tasktable header">
        <div onClick={ () => sortTasks('title')} className='title'>title</div>
        <div onClick={ () => sortTasks('id')} className="id">id</div>
        <div onClick={ () => sortTasks('priority')} className="priority">priority</div>
        <div onClick={ () => sortTasks('status')} className="status">status</div>
      </div>
      <div className="tasktable">
        {searchResult.map((task, index) => {
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
                  {task.status ? 'done' : 'on hold'}
                </span>
              </div>
            </div>
          )
        })}
        {!search && <button onClick={() => showMore()} className="btn"> Show more</button>}
      </div>
    </>
  )
};

export default React.memo(TaskTable)
