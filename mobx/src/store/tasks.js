import { runInAction, makeAutoObservable } from 'mobx'

class Tasks {
  isLoading = true
  taskList = []
  showedTaskList = []

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
        this.setLoading()
      })
  }
  setLoading() {
    this.isLoading = false
  }

  sortTasks(order, method) {
    order
      ? this.showedTaskList.sort((a, b) => a[method] > b[method] ? 1 : -1)
      : this.showedTaskList.sort((a, b) => a[method] < b[method] ? 1 : -1)
  }

  deleteTask(id) {
    this.showedTaskList = [
      ...this.showedTaskList.filter((task) => task.id !== id),
    ]
    console.log(this.showedTaskList)
  }
  showMore() {
    this.showedTaskList = [
      ...this.showedTaskList,
      ...this.taskList.splice(0, 10),
    ]
  }
}

export default new Tasks()
