import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return(
      <div id="content-holder" className="flex-col">
        <embed className="resumePdf" src="Resume.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" 
        width="80%" height="520px" style={{margin: "0 auto"}} />
      </div>
    );
  }
}

export default Resume;