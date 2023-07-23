import React from 'react';
import './Pagination.css';

export const Pagination = ({ pageCount, currentPage, onPageChange }) => {
  const handlePreviousClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination-container pt-5 pb-5">
      <button
        className="pagination-button"
        disabled={currentPage === 0}
        onClick={handlePreviousClick}
      >
        &#8592; 
      </button>
      <span className="pagination-page-number">Page {currentPage + 1} of {pageCount}</span>
      <button
        className="pagination-button"
        disabled={currentPage === pageCount - 1}
        onClick={handleNextClick}
      >
        &#8594; 
      </button>
    </div>
  );
};
