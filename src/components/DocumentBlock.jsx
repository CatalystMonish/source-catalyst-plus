import React, { useState } from "react";
import { Document, Page } from "@react-pdf/renderer";

function DocumentBlock() {
  const [showPdf, setShowPdf] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const samplePdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"; // Replace with your PDF URL

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <div className="my-m-10 flex rounded-md bg-light px-s-15 py-s-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#EB5757"
          className="h-[1.25rem] w-[1.25rem]"
        >
          <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
          <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
        </svg>
        <p
          className="ml-m-10 font-lexend text-label font-label"
          onClick={() => setShowPdf(true)}
        >
          PythonProject.pdf
        </p>
      </div>

      {showPdf && (
        <div className="pdf-container">
          <Document
            file={samplePdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      )}
    </div>
  );
}

export default DocumentBlock;
