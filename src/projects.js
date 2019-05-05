import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return(
      <div id="content-holder" className="flex-col">
        <div className="flex-row project-row">
          <div className="project-hold flex-col">
            <h2 className="text-center">Sinomim</h2>
            <img className="project-img" src="Sinomim.png" alt="" />
            <p className="text-center">A solo project made (as a concept) to monitor activity on unique usernames from different places, 
            and act as a marketplace to buy, sell, and trade them to new owners.</p>
          </div>
          <div className="project-hold flex-col">
            <h2 className="text-center">Neumont Innovation Center</h2>
            <img className="project-img" src="Innovation.png" alt="" />
            <p className="text-center">A group project to create a website for the Neumont Innovation Center, a place to create and publish 
            ideas while at Neumont into the real world. Specifically worked on the message board.</p>
          </div>
        </div>
        <div className="flex-row project-row">
          <div className="project-hold flex-col">
            <h2 className="text-center">Maze</h2>
            <img className="project-img" src="maze1.png" alt="" /> {/* Make this a slideshow */}
            <p className="text-center">First javascript application for generating a random maze. Later iterations 
            included a bot, then player controlled.</p>
          </div>
          <div className="project-hold flex-col">
            <h2 className="text-center">How To</h2>
            <img className="project-img" src="HowTo.png" alt="" />
            <p className="text-center">A angularJS single page application showing steps on how to learn Rocket League.</p>
          </div>
        </div>
        <div className="flex-row project-row">
          <div className="flex-col project-entry">
            <h2 className="text-center">Kinetic Typography</h2>
            <video className="project-video" controls>
              <source src="https://www.dropbox.com/s/py577218w1xw3lg/Kinetic.mp4?raw=1" type="video/mp4"></source>
            </video>
            <p className="text-center">A simple visual for an audio clip made interesting.</p>
          </div>
          <div className="flex-col project-entry">
            <h2 className="text-center">Questions</h2>
            <video className="project-video" controls>
              <source src="https://www.dropbox.com/s/i84r44ey1ubwpuf/Questions.mp4?raw=1" type="video/mp4"></source>
            </video>
            <p className="text-center">Taken from popular WorldStar Hip Hop series "Questions", edited to have even more visuals.</p>
          </div>
        </div>
      </div>
    );
  }
}

//Get links or import everything here
export default Projects;