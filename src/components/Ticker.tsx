import React from "react";
import { errorTicker, successTicker, ticker } from "../styles/style";
import warning from "../assets/warning.svg"
import success from "../assets/success.svg"

interface ContactListProps {
  type: string
}

const Ticker = (type: ContactListProps) => {
  return (
    <>
      {
        (type.type === 'success')
        ? <div className={[ticker, successTicker].join(' ')}>
            <img src={success} alt="" />
            <div>... was succesfully added!</div>
          </div>
        : <div className={[ticker, errorTicker].join(' ')}>
            <img src={warning} alt="" />
            <div>Error!</div>
          </div>
      }
    </>
  )
}

export default Ticker;
