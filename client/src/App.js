import React, { useEffect } from 'react'
import './Components/css/Loading.css'
import Container from './Components/Container'
import './Components/css/App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from './redux/actions/tasksActions'

const App = () => {
  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  if (tasks === undefined) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    )
  } else {
    return <Container tasks={tasks} />
  }
}

export default App
