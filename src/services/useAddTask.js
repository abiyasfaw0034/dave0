import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask } from "./api";

export function useAddTask() {
  const queryClient = useQueryClient();
  const { mutate, isLoading: isadding } = useMutation({
    mutationFn: (list) => addTask(list),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });

  return { mutate, isadding };
}
