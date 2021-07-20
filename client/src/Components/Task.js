import React from "react";
import styled from "styled-components";
import Cell from "./css/styled-components/Cell";

const Item = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  :first-child {
      padding: 10px 0px 0px 0px;
  }
`;

const Task = (props) => {
  return (
    <Item key={props.index}>
      <Cell>{props.task.title}</Cell>
      <Cell>{props.task.id}</Cell>
      <Cell priority={props.task.priority}>{props.task.priority}</Cell>
      <Cell>{props.task.status ? "done" : "on hold"}</Cell>
    </Item>
  );
};

export default Task;
