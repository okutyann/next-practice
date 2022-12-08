import React from "react";
import styles from "../../styles/module/todo.module.css";

export const IncompleteTods = (props) => {
  const { todos, onCliclDelete, onCliclComplete } = props;
  return (
    <>
      <div className={styles.incompleteArea}>
        <p className={styles.title}>未完了のtodo</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className={styles.listRow}>
                  <p>{todo}</p>
                  <button
                    className={styles.button}
                    onClick={() => onCliclComplete(index)}
                  >
                    完了
                  </button>
                  <button
                    className={styles.button}
                    onClick={() => onCliclDelete(index)}
                  >
                    削除
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

export default IncompleteTods;
