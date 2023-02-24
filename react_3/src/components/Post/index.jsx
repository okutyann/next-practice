import { usePost } from "@/hooks/usePost";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();
  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {/* ファイル名と一致しないとダメ [id] = query.id　*/}
      <div>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        {user?.name ? <div>Created By {user.name}</div> : null}
      </div>
    </>
  );
};
