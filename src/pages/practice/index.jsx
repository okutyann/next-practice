import React, { useState } from "react";
import styles from "../../styles/module/practice.module.css";

export default function index() {
  const [count, setCount] = useState(0);
  const onClickCountUP = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className={styles.div}>
        <p className={styles.p}>{count}</p>
        <button className={styles.button} onClick={onClickCountUP}>
          カウントアップ
        </button>
      </div>
    </>
  );
}
