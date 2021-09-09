import React,{ useState, useCallback} from 'react'
import useDebounce from './use-debounce'
import Button from './styled-components/Button'
import Task from './Task'
import Input from './styled-components/Input'
import tasks from './store/tasks'
import { observer } from 'mobx-react-lite'


const TaskTable = () => {
  const [search, setSearch] = useState()
  const [order, setOrder] = useState(false)
  
  const sortTasks = useCallback(
    (sortMethod) => {
      setOrder(!order)
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
                return <Task task={task} key={index} index={index} />
              })
          : tasks.showedTaskList  
              .map((task, index) => {
              return <Task task={task} key={index} index={index} />
            })}
        {tasks.taskList.length > 0 ? (
          <Button color={`#000`} onClick={() => tasks.showMore()}>Show more</Button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
export default observer(TaskTable)
