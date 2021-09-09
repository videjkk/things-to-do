import { runInAction, makeAutoObservable } from 'mobx'

class Tasks {
  taskList = []
  showedTaskList = []
  allTasksCount = 0
  constructor() {
    makeAutoObservable(this)
  }
  getTasks = async () => {
    await fetch('http://localhost:4000')
      .then((res) => res.json())
      .then((data) => {
        runInAction(() => {
          this.taskList = [...data]
          this.showedTaskList = [...this.taskList.splice(0, 10)]
        })
      })
  }

  set setInitialStateShowed(showedTaskList) {
    this.showedTaskList = showedTaskList
  }
  set setInitialStateList(taskList) {
    this.taskList = taskList
    this.allTasksCount = this.taskList.length + this.showedTaskList.length - 1
  }
  sortTasks(order, method) {
    order
      ? this.showedTaskList.sort((a, b) => (a[method] > b[method] ? 1 : -1))
      : this.showedTaskList.sort((a, b) => (a[method] < b[method] ? 1 : -1))
  }

  deleteTask(id) {
    this.showedTaskList = [
      ...this.showedTaskList.filter((task) => task.id !== id),
    ]
    console.log(
      `%cDeleted task with id: ${id}`,
      'color: green; font-size: 20px'
    )
  }
  showMore() {
    this.showedTaskList = [
      ...this.showedTaskList,
      ...this.taskList.splice(0, 10),
    ]
  }

  changeId(index) {
    const oldId = this.showedTaskList[index].id
    this.showedTaskList[index].id = this.allTasksCount + 1
    this.allTasksCount += 1
    console.log(
      `%cChanged id from ${oldId} to ${this.showedTaskList[index].id}`,
      'color: green; font-size: 20px'
    )
  }
}

export default new Tasks()
