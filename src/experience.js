import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return(
      <div id="content-holder" className="flex-col">  
        <div className="content-large-section flex-col">
          <span className="content-header flex-row experience-header">
            <img className="small-img" src="rizepoint.png" alt="" />
            <h2 className="text-center">Rizepoint</h2>
          </span>
          <p className="text-center">
            <b>Intern - Developer</b> [Janurary 2019 - Present]
          </p>
          <p className="standard-margin text-center">
            Working on company website to better suit client needs based on feedback, as well as company motives.
          </p>
        </div>
        <div className="content-large-section flex-col">
          <span className="content-header flex-row experience-header">
            <img className="small-img" src="neumont.png" alt="" />
            <h2 className="text-center">Neumont College of Computer Science</h2>
          </span>
          <p className="text-center">
            <b>Academic Coach</b> [Janurary 2018 - July 2018, September 2018 - Present]
          </p>
          <p className="standard-margin text-center">
            Working as an extra helper both outside and in class hours for classes including Introduction to Web 
            Presentation (HTML/CSS/Basic Javascript), Interactive Web Development (Advanced Javascript), and Front 
            End Implementation (Javascript Libraries).
          </p>
        </div>
      </div>
    );
  }
}

export default Experience;