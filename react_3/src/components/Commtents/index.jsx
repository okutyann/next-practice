import { useComments } from "@/hooks/useComments";
import Link from "next/link";

export const Comments = () => {
  const { data, error, isLoading } = useComments();
  if (isLoading) {
    return <div>ローディング中だよ！！！</div>;
  }
  if (error) {
    return <div>エラーが発生中だよ！！！</div>;
  }

  return (
    <ol>
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comment/${comment.id}`} legacyBehavior>
              <a>{comment.body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
