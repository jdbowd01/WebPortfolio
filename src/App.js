import React, { Component } from 'react';
import jump from 'jump.js';
import './App.css';
import About from './about';
import Experience from './experience'
import Resume from './resume'
import Projects from './projects'
import Contact from './contact'
import sectionInfo from './sectionInfo';
import Skills from './skills';

class ContentSection extends Component {
  render() {
    switch(this.props.content) {
      case "About":
        return <About></About>;
      case "Experience":
        return <Experience></Experience>;
      case "Skills":
        return <Skills></Skills>;
      case "Resume":
        return <Resume></Resume>;
      case "Projects":
        return <Projects></Projects>;
      case "Contact":
        return <Contact></Contact>;
      default:
        return "No file found";
    }
  }
}

class InfoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      headerPic: this.props.headerPic
    };
  }

  render() {
    return(
      <div id={this.state.id} className='flex-col section-info'>
        <div className='info-title' style={{backgroundImage: `url(${this.state.headerPic})`}}>
          <p>{this.state.title}</p>
        </div>
        <ContentSection content={this.state.title}></ContentSection>
      </div>
    );
  }
}

class Info extends Component {
  render() {
    return(
      <div id='info' className='flex-col'>
        {sectionInfo.map(function(info) {
          return <InfoSection key={sectionInfo.indexOf(info)} id={info.title.toLowerCase()} title={info.title} headerPic={info.image}></InfoSection>
        })}
      </div>
    );
  }
}

class NavTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: '#' + this.props.title.toLowerCase(),
      title: this.props.title,
      className: 'nav-tab hvr-underline-from-left-' + this.props.color
    };
  }
  
  
  render() {
    let clickPlace = this.state.ref;
    let easeInOutQuad = (t, b, c, d) => {
      t /= d / 2
      if (t < 1) return c / 2 * t * t + b
      t--
      return -c / 2 * (t * (t - 2) - 1) + b
    }
    return(
      <div className={this.state.className} onClick={function() {
        jump(document.querySelector(clickPlace), {
          duration: 700,
          easing: easeInOutQuad
        });
      }}>
        <p>{this.state.title}</p>
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    return(
      <div id='nav-bar' className='flex-col'>
        {sectionInfo.map(function(info) {
          return <NavTab key={sectionInfo.indexOf(info)} title={info.title} color={info.color}></NavTab>
        })}
        <hr />
        <div id='nav-name' className='flex-col'>
          <p id='nav-title'>Jordon Bowden</p>
          <p id='nav-desc'>Full Stack Developer</p>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return(
      <div id='site-hold' className='flex-row'>
        <NavBar></NavBar>
        <Info></Info>
      </div>
    );
  }
}

export default App;