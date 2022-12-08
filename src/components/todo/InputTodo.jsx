import React from "react";
import styles from "../../styles/module/todo.module.css";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <>
      <div className={styles.inputArea}>
        <input placeholder="todoを入力" value={todoText} onChange={onChange} />
        <button className={styles.button} onClick={onClick}>
          追加
        </button>
      </div>
    </>
  );
};

export default InputTodo;
