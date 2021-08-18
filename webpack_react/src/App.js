import React, { useEffect } from 'react'
import './Components/css/Loading.css'
import Container from './Components/Container'
import './Components/css/App.css'
import { observer } from 'mobx-react-lite'
import tasks from './store/tasks'

const App = observer(() => {
  useEffect(() => tasks.getTasks(), [])
  if (tasks.isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    )
  } else {
    return (
      <>
        <Container />
      </>
    )
  }
})

export default App
