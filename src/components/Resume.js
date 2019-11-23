import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import resume from "../files/andrew-resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  let w = null;
  if (window.innerWidth < 800){
    w = window.innerWidth * .9;
  }
  return (
    <div className="resume">
      <h1>Resume</h1>
      <div className="link">
        <a target="_blank" href={resume}>Download a copy</a>
      </div>
      <div className="document">
        <Document file={resume}>
          <Page pageNumber={1} width={w}/>
        </Document>
      </div>
    </div>
  );
}
 
export default Resume;