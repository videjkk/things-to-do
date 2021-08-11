import React, { useCallback, useState } from 'react'
import Cell from './css/styled-components/Cell'
import Icon from './css/styled-components/Icon'
import Item from './css/styled-components/Item'
import { useDispatch } from 'react-redux'
import Priority from './css/styled-components/Priority'
import EditedTitle from './css/styled-components/EditedTitle'
import { editTask } from '../redux/actions/tasksActions'

const Task = (props) => {
  const [editable, setEditable] = useState(false)
  const [title, setTitle] = useState(props.task.title)

  const dispatch = useDispatch()

  const handleChange = useCallback((e) => {
    setTitle(e.target.value)
  }, [])

  const onBlur = useCallback(() => {
    props.task.title = title[0].toUpperCase() + title.slice(1)
    dispatch(editTask(props.task))
    setEditable(false)
  }, [dispatch, props.task, title])

  const handleEditor = useCallback(() => {
    setTitle(props.task.title)
    setEditable(true)
  }, [props.task.title])

  return (
    <Item key={props.index}>
      {editable ? (
        <EditedTitle value={title} onBlur={onBlur} onChange={handleChange} />
      ) : (
        <Cell>{props.task.title}</Cell>
      )}
      <Cell>{props.task.id}</Cell>
      <Priority priority={props.task.priority}>{props.task.priority}</Priority>
      <Cell>{props.task.status ? 'done' : 'on hold'}</Cell>
      <Icon
        alt={`edit`}
        src={`https://image.flaticon.com/icons/png/512/1251/1251766.png`}
        onClick={handleEditor}
      />
    </Item>
  )
}

export default Task
