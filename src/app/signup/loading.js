import React from "react";
import styles from "./styles.css";
import Navbar from "../../../components/NavBar";

function Loading() {
  return (
    <>
    <Navbar />
    <div className={`flex items-center justify-center ${styles.container}`}>
      <div className={`w-full max-w-md ${styles.animation}`}>
        <h2 className={`${styles.header}`}>Loading...</h2>
        <div className={`${styles.skeleton}`}>
          <div className={`${styles.circle} ${styles.circle1}`}></div>
          <div className={`${styles.circle} ${styles.circle2}`}></div>
          <div className={`${styles.circle} ${styles.circle3}`}></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Loading;