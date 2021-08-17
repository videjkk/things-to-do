import React, { useState, useEffect, useCallback } from 'react'
import './css/TaskTable.css'
import useDebounce from './use-debounce'
import Button from './css/styled-components/Button'
import Task from './Task'
import Input from './css/styled-components/Input'
import tasks from '../store/tasks'
import { observer } from 'mobx-react-lite'

const TaskTable = () => {
  const [search, setSearch] = useState()
  const [order, setOrder] = useState(false)
  useEffect(() => tasks.getTasks(), [])

  const sortTasks = useCallback(
    (sortMethod) => {
      setOrder(!order)
      console.log(sortMethod)
      tasks.sortTasks(order, sortMethod)
    },
    [order]
  )

  const handleChange = useDebounce((e) => {
    setSearch(e.target.value.toLowerCase())
  }, 700)

  return (
    <div className="body">
      <Input searching={handleChange} />
      <div className="tasktable header">
        <div onClick={() => sortTasks('title')}>title</div>
        <div onClick={() => sortTasks('id')}>id</div>
        <div onClick={() => sortTasks('priority')}>priority</div>
        <div onClick={() => sortTasks('status')}>status</div>
      </div>
      <div className="tasktable">
        {search
          ? tasks.showedTaskList
              .filter((task) => task.title.toLowerCase().includes(search))
              .map((task, index) => {
                return <Task task={task} key={index} />
              })
          : tasks.showedTaskList.map((task, index) => {
              return <Task task={task} key={index} />
            })}
        {tasks.taskList.length > 0 ? (
          <Button onClick={() => tasks.showMore()}>Show more</Button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default observer(TaskTable)
