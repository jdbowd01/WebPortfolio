import React, { Component } from 'react';

//Simple pagination or better scrolling for things in skill-row

class Skills extends Component {
  render() {
    return(
      <div id="content-holder" className="flex-col">
        <h1 className="text-center">Web Software</h1>
        <span className="flex-row skill-row">
          <div className="content-small-section flex-col">
            <img className="skill-img" src="css3.png" alt="" />
            <h4 className="text-center skill-text">CSS</h4>
          </div>
          <div className="content-small-section flex-col">
            <img className="skill-img" src="html5.png" alt="" />
            <h4 className="text-center skill-text">HTML</h4>
          </div>
          <div className="content-small-section flex-col">
            <img className="skill-img" src="javascript.png" alt="" />
            <h4 className="text-center skill-text">Javascript</h4>
          </div>
        </span>
        <h1 className="text-center">General Coding</h1>
        <span className="flex-row skill-row">
          <div className="content-small-section flex-col">
            <img className="skill-img" src="cSharp.png" alt="" />
            <h4 className="text-center skill-text">C#</h4>
          </div>
          <div className="content-small-section flex-col">
            <img className="skill-img" src="java.png" alt="" />
            <h4 className="text-center skill-text">Java</h4>
          </div>
          <div className="content-small-section flex-col">
            <img className="skill-img" src="python.png" alt="" />
            <h4 className="text-center skill-text">Python</h4>
          </div>
          <div className="content-small-section flex-col">
            <img className="skill-img" src="ruby.png" alt="" />
            <h4 className="text-center skill-text">Ruby</h4>
          </div>
        </span>
        <h1 className="text-center">Other</h1>
        <span className="flex-row skill-row">
          <div className="content-small-section flex-col">
            <img className="skill-img" src="adobe-creativecloud.png" alt="" />
            <h4 className="text-center skill-text">Adobe CC</h4>
          </div>
          <div className="content-small-section flex-col">
            <img className="skill-img" src="github.png" alt="" />
            <h4 className="text-center skill-text">Github</h4>
          </div>
          <div className="content-small-section flex-col">
            <img className="skill-img" src="mongodb.png" alt="" />
            <h4 className="text-center skill-text">MongoDB</h4>
          </div>
          <div className="content-small-section flex-col">
            <img className="skill-img" src="sql-server.png" alt="" />
            <h4 className="text-center skill-text">SQL Server</h4>
          </div>
        </span>
      </div>
    );
  }
}

export default Skills;