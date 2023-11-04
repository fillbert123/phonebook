import React from "react";
import { errorTicker, successTicker, ticker } from "../styles/style";
import warning from "../assets/warning.svg"
import success from "../assets/success.svg"

interface ContactListProps {
  data: {
    type: string,
    message: string
  }
}

const Ticker = ({data}: ContactListProps) => {
  console.log(data);
  return (
    <>
      {
        (data.type === 'success')
        ? <div className={[ticker, successTicker].join(' ')}>
            <img src={success} alt="" />
            <div>{data.message}</div>
          </div>
        : <div className={[ticker, errorTicker].join(' ')}>
            <img src={warning} alt="" />
            <div>{data.message}</div>
          </div>
      }
    </>
  )
}

export default Ticker;
