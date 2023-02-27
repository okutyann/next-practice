import { useUser } from "@/hooks/useUser";

export const User = () => {
  const { data, error, isLoading } = useUser();
  if (isLoading) {
    return <div>ロード中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <div>
        <p>{data.username}</p>
      </div>
    </>
  );
};
