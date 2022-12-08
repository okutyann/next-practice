import React from "react";
import styles from "../../styles/module/todo.module.css";

export const CompleteTodo = ({ todos, onClickBack }) => {
  return (
    <>
      <div className={styles.completeArea}>
        <p className={styles.title}>完了のtodo</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className={styles.listRow}>
                  <p>{todo}</p>
                  <button
                    className={styles.button}
                    onClick={() => onClickBack(index)}
                  >
                    戻す
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CompleteTodo;
