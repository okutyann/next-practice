import React, { useState } from "react";
import { InputTodo } from "../../components/todo/InputTodo";
import { IncompleteTods } from "../../components/todo/IncompleteTods";
import { CompleteTodo } from "../../components/todo/CompleteTodo";

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTods
        todos={incompleteTodos}
        onCliclDelete={onCliclDelete}
        onCliclComplete={onCliclComplete}
      />
      <CompleteTodo todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
}
