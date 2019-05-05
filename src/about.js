import React, { Component } from 'react';

class About extends Component {
  render() {
    // More picture here or above
    return(
      <div id="content-holder" className="flex-col">  
        <img className="large-image" alt=""></img>
        <h1 className="text-center">Hello, I'm Jordon Bowden.</h1>
        <p className="text-center">I do web things.</p>
      </div>
    );
  }
}

export default About;