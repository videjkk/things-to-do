import React from "react";
import './css/Body.css'

const Body = (props) => {

    return <div className="body-container">
        <div className="body-header">
            <div className="body-taskname">Taskname</div>
            <div className="body-id">Id</div>
            <div className="body-priority">Priority</div>
            <div className="body-status">Status</div>
        </div>
    </div>
}

export default Body;