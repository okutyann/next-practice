import { useCallback, useEffect, useReducer } from "react";

const initialState = {
  date: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ok":
      return {
        ...state,
        loading: false,
        date: action.date,
      };
    case "no":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      throw new Error("typeを取得できませんでした。");
  }
};

export const Practice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const json = await res.json();
      dispatch({ type: "ok", date: json });
    } catch (error) {
      dispatch({ type: "no", error });
    }
  });

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <ul>
      {state.date.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
};
