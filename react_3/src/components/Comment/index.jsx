import { useComment } from "@/hooks/useComment";

export const Comment = () => {
  const { data, error, isLoading } = useComment();
  if (isLoading) {
    return <div>読み込み中…</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <div>
        <h1>{data.body}</h1>
      </div>
    </>
  );
};
