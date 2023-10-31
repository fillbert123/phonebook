import React from "react";
import {loadingScreen} from "../styles/style"

const LoadingScreen: React.FC = () => {
  return (
    <>
      <div className={loadingScreen}>
        Loading...
      </div>
    </>
  )
}

export default LoadingScreen;