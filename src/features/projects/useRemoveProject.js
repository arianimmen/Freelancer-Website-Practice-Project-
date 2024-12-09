import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: removeProject } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: () => {
      toast.success("پروژه با موفقیت حذف شد‌");
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isDeleting, removeProject };
}
