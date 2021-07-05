import React from "react";
import "./css/Container.css";
import { useState, useEffect } from "react";
import Body from "./Body";
import ContainerHeader from "./ContainerHeader";

const Container = (props) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(props.taskList);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const result = props.taskList.filter((task) =>
      task.title.toLowerCase().includes(search)
    );
    console.log(result);
    setSearchResult(result);
  }, [search]);

  if (searchResult) {
    return (
      <div className="container">
        <div className="container-wrapper">
          <div className="container-header">
            <p>
              things.do | we live only one life, so{" "}
              <span className="label">things.do</span>
            </p>
            <input
              className="search-bar"
              type="search"
              placeholder="Search a thing..."
              value={search}
              onChange={handleChange}
            />
          </div>
          <Body taskList={searchResult} />
        </div>
      </div>
    );
  } else {
    return (<div>
      <ContainerHeader />

    </div>
    );
  }
};

export default Container;
