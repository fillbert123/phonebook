import React from "react";
import { actionButton, currentPage, pagination } from "../styles/style";
import first from "../assets/first.svg"
import last from "../assets/last.svg"

interface PaginationProps {
  current: number;
  maxPages: number;
  directTo: (data: number) => void;
}

const Pagination = ({current, maxPages, directTo}: PaginationProps) => {
  const handleGoToFirst = () => {
    directTo(1);
  }
  const handleGoToPrev = () => {
    directTo(current-1);
  }
  const handleGoToPrevTwo = () => {
    directTo(current-2);
  }
  const handleGoToNext = () => {
    directTo(current+1);
  }
  const handleGoToNextTwo = () => {
    directTo(current+2);
  }
  const handleGoToLast = () => {
    directTo(maxPages);
  }

  return (
    <div className={pagination}>
      <button className={actionButton} onClick={handleGoToFirst}>
        <img src={first} alt="" />
      </button>
      {
        (current - 2 >= 1) && 
          <button className={actionButton} onClick={handleGoToPrevTwo}>
            <div>{current - 2}</div>
          </button>
      }
      {
        (current - 1 >= 1) && 
          <button className={actionButton} onClick={handleGoToPrev}>
            <div>{current - 1}</div>
          </button>
      }
      <button className={[currentPage, actionButton].join(' ')}>
        <div>{current}</div>
      </button>
      {
        (current + 1 <= maxPages) && 
          <button className={actionButton} onClick={handleGoToNext}>
            <div>{current + 1}</div>
          </button>
      }
      {
        (current + 2 <= maxPages) && 
          <button className={actionButton} onClick={handleGoToNextTwo}>
            <div>{current + 2}</div>
          </button>
      }
      <button className={actionButton} onClick={handleGoToLast}>
        <img src={last} alt="" />
      </button>
    </div>
  )
}

export default Pagination;