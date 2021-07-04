import React from 'react';
import './css/Container.css'
import { useState, useEffect } from 'react'


const Container = (props) => {

const[search, setSearch] = useState('');
const[searchResult, setSearchResult] = useState(props.taskList);

const handleChange = (e) => {
    setSearch(e.target.value)
}

useEffect(() => {
    const result = props.taskList
        .filter(task => 
            task.title.toLowerCase().includes(search))
            console.log(result)
    setSearchResult(result)
},[search])

 return <div className="container">
     <div className="container-wrapper">
         <input className='search-bar' type='search' placeholder='Search a thing...' value={search} onChange={handleChange}/>
     </div>
{searchResult.map(task =><div>{task.title}</div>)}
 </div>;
}

export default Container