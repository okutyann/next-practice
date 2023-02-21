import { useCallback, useEffect, useState, useReducer } from "react";

const initialState = {
  date: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        date: action.date,
        loading: false,
      };
    case "error": {
      // console.log(action);
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    // 上記の2つのどれにも当てはまらなかった場合
    default:
      throw new Error("no such action type!");
  }
};

export const Posts = () => {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得を失敗しました");
      }
      const json = await res.json();
      dispatch({ type: "end", date: json });
    } catch (error) {
      console.log(error);
      dispatch({ type: "error", error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <div>ローディング中</div>;
  }
  if (state.error) {
    return <div>{state.error.message}</div>;
  }
  console.log(state);
  if (state.date.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {state.date.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
