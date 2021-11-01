import React, { useCallback, useState } from 'react'
import Cell from './styled-components/Cell'
import Icon from './styled-components/Icon'
import Item from './styled-components/Item'
import Priority from './styled-components/Priority'
import EditedTitle from './styled-components/EditedTitle'
import tasks from './store/tasks'
import { observer } from 'mobx-react-lite'

const Task = observer((props) => {
  const [editable, setEditable] = useState(false)
  const [title, setTitle] = useState(props.task.title)

  
  const handleChange = useCallback((e) => {
    setTitle(e.target.value)
  }, [])

  const idChangeHandler = useCallback(() => {
    tasks.changeId(props.index)
  },[props.index])


  const onBlur = useCallback(() => {
    props.task.title =
      title[0] === undefined
        ? tasks.deleteTask(props.task.id)
        : title[0].toUpperCase() + title.slice(1)
    setEditable(false)
  }, [props.task, title])


  const handleEditor = useCallback(() => {
    setTitle(props.task.title)
    setEditable(true)
  }, [props.task.title])


  return (
    <Item>
      {editable ? (
        <EditedTitle value={title} onBlur={onBlur} onChange={handleChange} />
      ) : (
        <Cell>
          <Icon
            alt={`edit`}
            src={`https://image.flaticon.com/icons/png/512/1251/1251766.png`}
            onClick={handleEditor}
          />
          {props.task.title}
        </Cell>
      )}
      <Cell onClick={idChangeHandler}>{props.task.id}</Cell>
      <Priority priority={props.task.priority}>{props.task.priority}</Priority>
      <Cell>{props.task.status ? 'done' : 'on hold'}</Cell>
    </Item>
  )
})

export default Task
