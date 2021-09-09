import { observer } from 'mobx-react-lite'
import { useEffect } from 'react';
import Container from './Container'
import tasks from './store/tasks';

const Index = ({showedTaskList, taskList}) => {
  tasks.setInitialStateShowed = showedTaskList;
  tasks.setInitialStateList = taskList;
    return (
      <>
        <Container />
      </>
    )
  }

export default Index;

export async function getServerSideProps() {
  await tasks.getTasks();
  return {
    props: {
      showedTaskList: tasks.showedTaskList,
      taskList: tasks.taskList,
    },
  }
}