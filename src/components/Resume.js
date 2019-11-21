import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import resume from "../files/andrew-resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <Document file={resume}>
        <Page pageNumber={1}/>
      </Document>
    </div>
  );
}
 
export default Resume;