import { FETCH_TASKS_SUCCESS, SHOW_MORE, SORT_TASKS } from '../types/types'
import { EDIT_TASK } from './../types/types'

export const fetchTasks = () => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:4000')
    const json = await response.json()
    dispatch({ 
      type: FETCH_TASKS_SUCCESS, 
      data: json 
    })
  }
}

export const editTask = (edited) => {
  return (dispatch) => {
    dispatch({ 
      type: EDIT_TASK, 
      data: edited 
    })
  }
}

export const sortTasks = (tasks, order, sortMethod) => {
  return (dispatch) => {
    dispatch({
      type: SORT_TASKS,
      data: tasks,
      order: order,
      method: sortMethod,
    })
  }
}

export const showMore = (tasks) => {
  return (dispatch) => {
    dispatch({ 
      type: SHOW_MORE,
      data: tasks
    })
  }
}
