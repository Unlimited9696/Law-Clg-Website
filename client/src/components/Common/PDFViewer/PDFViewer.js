"use client";
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Use a local worker file instead of CDN
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

export default function PDFViewer({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error) {
    console.error('PDF load error:', error);
    setError(true);
    setLoading(false);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => {
      const newPage = prevPageNumber + offset;
      return newPage >= 1 && newPage <= numPages ? newPage : prevPageNumber;
    });
  }

  return (
    <div className="flex flex-col items-center">
      {loading && (
        <div className="w-full flex justify-center items-center py-10">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
          <span className="ml-3">Loading PDF...</span>
        </div>
      )}
      
      {error && (
        <div className="w-full text-center py-10">
          <div className="text-red-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-red-500 text-lg">Failed to load PDF. Please try downloading instead.</p>
        </div>
      )}
      
      {!error && (
        <div className="pdf-container w-full">
          <object
            data={pdfUrl}
            type="application/pdf"
            width="100%"
            height="600"
            className="w-full border rounded shadow-lg"
            aria-label="PDF Document"
          >
            <p>
              It appears your browser doesn't support embedded PDFs.
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">
                Click here to download the PDF
              </a>
            </p>
          </object>
        </div>
      )}
    </div>
  );
} 