import { fetchTasks } from "./api";

import { useQuery } from "@tanstack/react-query";
export function useGetTask() {
  const { data, isLoading } = useQuery({
    queryFn: fetchTasks,
    queryKey: ["tasks"],
  });
  return { data, isLoading };
}
