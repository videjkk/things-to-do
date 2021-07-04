import React from 'react';
import './css/Container.css'
import { useState } from 'react'
// import Header from './Header'
// import TaskTable from './TaskTable'


const Container = (props) => {

const [tasks, setTasks] = useState('');

const filterTasks = () => {
    setTasks();
}
 return <div className="container">
     <div className="container-wrapper">
         <input type='search' />
     </div>

 </div>;
}

export default Container