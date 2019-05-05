import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return(
      <div id="content-holder" className="flex-col">
        <span className="flex-row contact-row">
          <i className="contact-icon fas fa-envelope-square"></i>
          <h2>jordon.bowden@gmail.com</h2>
        </span>
        <span className="flex-row contact-row">
          <i className="contact-icon fab fa-linkedin"></i>
          <a href="https://linkedin.com/in/jordonbowden/"><h2>https://linkedin.com/in/jordonbowden/</h2></a>
        </span>
        {/* Probably figure out a form to email me here */}
      </div>
    );
  }
}

export default Contact;