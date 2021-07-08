import React from 'react';
import "./css/Body.css"
import { useState, useEffect } from 'react'
import TaskTable from './TaskTable'

const Body = (props) => {

const handleChange = (e) => {
    setSearch(e.target.value);
}
const [search, setSearch] = useState('');
const [searchResult, setSearchResult] = useState(props.tasks);

useEffect(() => {
    setSearchResult(props.tasks.filter(task => task.title.toLowerCase().includes(search)))
},[search])


    return(
      <div сlassName="body-wrapper">
          <input className='search' value={search} type="search" placeholder="Search a thing to do..." onChange={handleChange}/>
          <TaskTable tasks={searchResult}/>
      </div>
    );
}
export default Body;