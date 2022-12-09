import React from "react";
import styles from "../../styles/module/todo.module.css";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "57px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};
export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <>
      <div style={style}>
        <input
          disabled={disabled}
          placeholder="todoを入力"
          value={todoText}
          onChange={onChange}
        />
        <button disabled={disabled} className={styles.button} onClick={onClick}>
          追加
        </button>
      </div>
    </>
  );
};

export default InputTodo;
