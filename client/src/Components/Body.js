import React from 'react';
import "./css/Body.css"
import { useState, useEffect } from 'react'
import TaskTable from './TaskTable'

const Body = (props) => {

    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState(props.tasks);

    useEffect(() => {
        setSearchResult(props.tasks.filter(task => task.title.toLowerCase().includes(search)))
    },[search, props.tasks])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return(
      <div сlassName="body-wrapper">
          <input className='search' value={search} type="search" placeholder="Search a thing to do..." onChange={handleChange}/>
          <TaskTable tasks={searchResult} onSort/>
      </div>
    );
}

export default Body;