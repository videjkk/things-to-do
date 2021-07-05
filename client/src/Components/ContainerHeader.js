import React from 'react';
import Body from "./Body";
const ContainerHeader = () => {

    return (<div className="container">
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
        />
      </div>
      <Body />
      <div class="sk-fading-circle">
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
      </div>
    </div>
  </div>);
}

export default ContainerHeader;