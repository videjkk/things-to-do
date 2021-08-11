import {
  FETCH_TASKS_SUCCESS,
  EDIT_TASK,
  SORT_TASKS,
  SHOW_MORE,
} from '../types/types'

export default function rootReducer(state, action) {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return { tasks: action.data, taskList: action.data.splice(0, 10) }
    case EDIT_TASK:
      return {
        tasks: state.tasks,
        taskList: state.taskList.map((task) =>
          action.data.id === task.id ? (task = action.data) : task
        ),
      }
    case SORT_TASKS:
      return {
        tasks: state.tasks,
        taskList: action.order
          ? state.taskList.sort((a, b) => a[action.method] > b[action.method])
          : state.taskList.sort((a, b) => a[action.method] < b[action.method]),
      }
    case SHOW_MORE:
      return {
        tasks: state.tasks,
        taskList: action.data.concat(state.tasks.splice(0, 10)),
      }
    default:
      return state
  }
}
