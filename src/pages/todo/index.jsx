import React, { useState } from "react";
import styles from "../../styles/module/todo.module.css";

export default function Index() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "テスト１",
    "テスト２",
  ]);
  const [completeTodos, setCompleteTodos] = useState(["テスト３"]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodo);
    setTodoText("");
  };
  const onCliclDelete = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setIncompleteTodos(newTodo);
  };

  return (
    <>
      <div className={styles.inputArea}>
        <input
          placeholder="todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button className={styles.button} onClick={onClickAdd}>
          追加
        </button>
      </div>
      <div className={styles.incompleteArea}>
        <p className="title">未完了のtodo</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className={styles.listRow}>
                  <p>{todo}</p>
                  <button className={styles.button}>完了</button>
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
      <div className={styles.completeArea}>
        <p className="title">完了のtodo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className={styles.listRow}>
                  <p>{todo}</p>
                  <button className={styles.button}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
