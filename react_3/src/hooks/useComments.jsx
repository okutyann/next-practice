import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export const useComments = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );
  return { data, error, isLoading };
};
