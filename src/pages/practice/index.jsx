import React, { useCallback, useState } from "react";
import styles from "../../styles/module/practice.module.css";
import { ChildArea } from "../../components/practice/ChildArea";

export default function index() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickOpen = () => {
    setOpen(!open);
  };
  const onClickClose = useCallback(() => setOpen(false), []);
  return (
    <>
      <div className={styles.div}>
        <input value={text} onChange={onChangeText} />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
      </div>
    </>
  );
}
