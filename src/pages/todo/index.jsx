import React, { useState } from "react";
import styles from "../../styles/module/todo.module.css";

export default function Index() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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

  const onCliclComplete = (index) => {
    const newIncompleteTodo = [...incompleteTodos];
    newIncompleteTodo.splice(index, 1);

    const newCompleteTodo = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodo);
    setCompleteTodos(newCompleteTodo);
  };

  const onClickBack = (index) => {
    const newCompleteTodo = [...completeTodos];
    newCompleteTodo.splice(index, 1);

    const newIncompleteTodo = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodo);
    setCompleteTodos(newCompleteTodo);
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
        <p className={styles.title}>未完了のtodo</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
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
      <div className={styles.completeArea}>
        <p className={styles.title}>完了のtodo</p>
        <ul>
          {completeTodos.map((todo, index) => {
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
}
