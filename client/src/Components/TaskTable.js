import React, { useState, useCallback } from 'react'
import './css/TaskTable.css'
import useDebounce from './use-debounce'
import Button from './css/styled-components/Button'
import Task from './Task'
import Input from './css/styled-components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { showMore, sortTasks } from '../redux/actions/tasksActions'

const TaskTable = () => {
  const tasks = useSelector((state) => state.taskList)
  const dispatch = useDispatch()

  const [search, setSearch] = useState()
  const [order, setOrder] = useState(false)

  const sortTask = useCallback(
    (sortMethod) => {
      setOrder(!order)
      dispatch(sortTasks(tasks, order, sortMethod))
    },
    [dispatch, order, tasks]
  )

  const show = () => {
    dispatch(showMore(tasks))
  }

  const handleChange = useDebounce((e) => {
    setSearch(e.target.value.toLowerCase())
  }, 700)

  return (
    <div className="body">
      <Input searching={handleChange} />
      <div className="tasktable header">
        <div onClick={() => sortTask('title')}>title</div>
        <div onClick={() => sortTask('id')}>id</div>
        <div onClick={() => sortTask('priority')}>priority</div>
        <div onClick={() => sortTask('status')}>status</div>
      </div>
      <div className="tasktable">
        {search
          ? tasks
              .filter((task) => task.title.toLowerCase().includes(search))
              .map((task, index) => {
                return <Task task={task} key={index} />
              })
          : tasks.map((task, index) => {
              return <Task task={task} key={index} />
            })}
        {<Button onClick={show}>LOREM IPSUM</Button>}
      </div>
    </div>
  )
}

export default TaskTable
