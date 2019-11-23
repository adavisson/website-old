//import React from 'react';
import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import resume from "../files/andrew-resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  state = {
    w: window.innerWidth
  }

  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    if(window.innerWidth < 700){
      this.setState({
        w: window.innerWidth * .9
      })
    } else {
      this.setState({
        w: null
      })
    }
  }

  render() { 
    return (
      <div className="resume">
       <h1>Resume</h1>
       <div className="link">
         <a target="_blank" href={resume}>Download a copy</a>
       </div>
       <div className="document">
         <Document file={resume}>
           <Page pageNumber={1} width={this.state.w}/>
         </Document>
       </div>
     </div>
    );
  }
}
 
export default Resume;